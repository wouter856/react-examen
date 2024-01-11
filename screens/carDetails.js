import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { differenceInDays, format } from 'date-fns';

const Details = ({ route }) => {
  const navigation = useNavigation();
  // Extract the car data and start and end date from the route parameters
  const { car, startDate, endDate } = route.params;

  const startDateObject = new Date(startDate);
  const endDateObject = new Date(endDate);

  // State to control the visibility of date pickers
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  // State to store selected dates
  const [selectedStartDate, setSelectedStartDate] = useState(startDateObject);
  const [selectedEndDate, setSelectedEndDate] = useState(endDateObject);

  // State to store the calculated total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate the total price based on the selected dates
  const calculateTotalPrice = () => {
    if (selectedStartDate === selectedEndDate) {
      const total = car.price || 0; // Default to 0 if car.price is undefined
      setTotalPrice(total.toFixed(2));
    } else {
      const days = differenceInDays(selectedEndDate, selectedStartDate) + 1;
      const price = car.price || 0; // Default to 0 if car.price is undefined
      const total = days * price;
      setTotalPrice(total.toFixed(2));
    }
  };

  // Update total price whenever selected dates change
  useEffect(() => {
    calculateTotalPrice();
  }, [selectedStartDate, selectedEndDate]);

  // Function to handle the button press and navigate to the Rented.js page
  const handleRentButtonPress = () => {
    const formattedStartDate = selectedStartDate.toISOString(); // Convert to string
    const formattedEndDate = selectedEndDate.toISOString(); // Convert to string

    navigation.navigate('WRS - Rented', { car, startDate: formattedStartDate, endDate: formattedEndDate });
  };

  const updateEndDate = (newStartDate) => {
    // Check if the new start date is later than the current end date when a new start date is selected
    if (newStartDate > selectedEndDate) {
      // Set the end date to the new start date
      setSelectedEndDate(newStartDate);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.datePickersContainer}>
        <Text style={styles.title}>Pick your desired renting period:</Text>
        <View style={styles.selectedDateContainer}>
          <Text style={styles.datePickerText}>From:</Text>
          <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
            <Text style={styles.dateSelector} onPress={() => setShowStartDatePicker(true)}>
              {format(selectedStartDate, 'dd/MM/yyyy')}
            </Text>
          </TouchableOpacity>
          <Text style={styles.datePickerText}>Till:</Text>
          <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
            <Text style={styles.dateSelector} onPress={() => setShowEndDatePicker(true)}>
              {format(selectedEndDate, 'dd/MM/yyyy')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {showStartDatePicker && (
        <DateTimePicker
          value={selectedStartDate}
          mode="date"
          is24Hour={true}
          display="default"
          format="DD/MM/YYYY"
          onChange={(event, selectedDate) => {
            setShowStartDatePicker(false);
            if (selectedDate) {
              setSelectedStartDate(selectedDate);
              updateEndDate(selectedDate); // Update the end date when the start date changes beyond the current end date
            }
          }}
        />
      )}

      {showEndDatePicker && (
        <DateTimePicker
          value={selectedEndDate}
          mode="date"
          is24Hour={true}
          display="default"
          format="DD/MM/YYYY"
          onChange={(event, selectedDate) => {
            setShowEndDatePicker(false);
            if (selectedDate) {
              setSelectedEndDate(selectedDate);
            }
          }}
        />
      )}

      <Text style={styles.carName}>{car.name}</Text>
      <Image source={car.imageUrl} style={styles.carImage} />
      <View style={styles.priceContainer}>
        <Text style={styles.carPrice}>€{car.price}</Text>
        <Text style={styles.carPriceTag}>/Per day</Text>
      </View>
      <View style={styles.statisticsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statistic}>Seats: </Text>
          <Text style={styles.carSeats}>{car.seats}</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statistic}>Doors: </Text>
          <Text style={styles.carDoors}>{car.doors}</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statistic}>Gears: </Text>
          <Text style={styles.carTransmission}>{car.transmission}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.rentButton}
        onPress={handleRentButtonPress}
      >
        <Text style={styles.rentButtonText}>Rent Now: €{totalPrice}</Text>
      </TouchableOpacity>
      <Text style={styles.carDescription}>{car.description}</Text>
    </ScrollView>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    fontSize: 18,
  },
  carImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  carName: {
    width: '80%',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'left',
  },
  priceContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
    position: 'relative',
    top: -32,
    alignItems: 'right',
    justifyContent: 'flex-end',
  },
  carPrice: {
    fontSize: 32,
    color: '#03C04A',
    fontWeight: 'bold',
  },
  carPriceTag: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  statisticsContainer: {
    flexDirection: 'column',
    marginTop: 8,
    width: '90%',
    alignItems: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '80%',
    justifyContent: 'space-between',
  },
  statistic: {
    fontWeight: 'bold',
    marginRight: 4,
    fontSize: 24,
  },
  carSeats: {
    fontSize: 24,
  },
  carDoors: {
    fontSize: 24,
  },
  carTransmission: {
    fontSize: 24,
  },
  rentButton: {
    backgroundColor: '#03C04A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    width: '90%',
  },
  rentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  carDescription: {
    fontSize: 16,
    marginTop: 16,
  },
  datePickersContainer: {
    backgroundColor: '#03C04A', // Light Blue color
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  selectedDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFF',
  },
  datePickersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerText: {
    fontSize: 16,
    color: '#FFF',
  },
  dateSelector: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8,
    color: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 8,
  },
};

export default Details;
