import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { useNavigation } from '@react-navigation/native';

const Catalogue = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const cars = [
    // ... (your car data remains unchanged)
  ];

  const handleCarPress = (car) => {
    // Navigate to the CarDetails screen and pass the selected car data along with dates
    navigation.navigate('CarDetails', { car, startDate, endDate });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.carContainer}
      onPress={() => handleCarPress(item)}
    >
      <Image source={item.imageUrl} style={styles.carImage} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carSummary}>{item.summary}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.catalogue}>
      <View style={styles.datePickersContainer}>
        <DatePicker
          style={styles.datePicker}
          date={startDate}
          mode="date"
          placeholder="Select start date"
          format="YYYY-MM-DD"
          minDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => setStartDate(date)}
        />
        <DatePicker
          style={styles.datePicker}
          date={endDate}
          mode="date"
          placeholder="Select end date"
          format="YYYY-MM-DD"
          minDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => setEndDate(date)}
        />
      </View>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = {
  catalogue: {
    flex: 1,
    padding: 16,
  },
  carContainer: {
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  carSummary: {
    fontSize: 16,
    marginTop: 4,
  },
  datePickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  datePicker: {
    width: '48%',
  },
};

export default Catalogue;
