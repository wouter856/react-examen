import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarDetails = ({ route }) => {
  const navigation = useNavigation();

  // Extract the car data from the route parameters
  const { car } = route.params;

  // Function to handle the button press and navigate to the Rented.js page
  const handleRentButtonPress = () => {
    navigation.navigate('Rented', { car });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <Text style={styles.rentButtonText}>Rent Now</Text>
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
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '40%',
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
};

export default CarDetails;
