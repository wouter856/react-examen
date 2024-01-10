import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const Car = ({ car, onPress }) => {
  return (
    <TouchableOpacity style={styles.carContainer} onPress={onPress}>
      <Text style={styles.carName}>{car.name}</Text>
      <Image source={car.imageUrl} style={styles.carImage} />
      <View style={styles.priceContainer}>
        <Text style={styles.carPrice}>€{car.price}</Text>
        <Text style={styles.carPriceTag}>/Per day</Text>
      </View>
      <Text style={styles.carSummary}>{car.summary}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    carName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8,
    },
    carImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        position: 'relative',
        top: -20,
    },
    priceContainer: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 8,
        position: 'relative',
        top: -40,
        left: 160,
    },
    carPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#03C04A',
    },
    carPriceTag: {
        fontSize: 18,
        marginLeft: 4,
        fontWeight: 'bold',
        marginTop: 12,
    },
    carContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    carSummary: {
        fontSize: 18,
        position: 'relative',
        top: -28,
    },
});

export default Car;