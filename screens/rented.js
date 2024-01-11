import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { differenceInDays, format } from 'date-fns';

const Rented = () => {
  const route = useRoute();
  const { car, startDate, endDate } = route.params;
  const navigation = useNavigation();

  // State to store the calculated total price
  const [totalPrice, setTotalPrice] = useState(0);
  
  const calculateTotalPrice = () => {
    if (startDate === endDate) {
      const total = car.price || 0; // Default to 0 if car.price is undefined
      setTotalPrice(total);
    } else {
      const days = differenceInDays(endDate, startDate) + 1;
      const price = car.price || 0; // Default to 0 if car.price is undefined
      const total = days * price;
      setTotalPrice(total);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [startDate, endDate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate back to the home page after 2 seconds
      navigation.navigate('WRS - Home');
    }, 5000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.rentedText}>You have rented</Text>
      <Text style={styles.carName}>{car.name}</Text>
      <Image source={car.imageUrl} style={styles.carImage} />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>From</Text>
        <Text style={styles.dateValue}>{format(startDate, 'dd/MM/yyyy')}</Text>
        <Text style={styles.dateText}>Till</Text>
        <Text style={styles.dateValue}>{format(endDate, 'dd/MM/yyyy')}</Text>
        <Text style={styles.dateText}>for</Text>
        <Text style={styles.dateValue}>€{totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#03C04A',
  },
  rentedText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFF',
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  carImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: '#FFF',
    marginRight: 4,
  },
  dateValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 4,
  },
});

export default Rented;
