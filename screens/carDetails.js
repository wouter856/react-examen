import React from 'react';
import { View, Text, Image } from 'react-native';

const CarDetails = ({ route }) => {
  // Extract the car data from the route parameters
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image source={car.imageUrl} style={styles.carImage} />
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carSummary}>{car.summary}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
};

export default CarDetails;