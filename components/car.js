import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const Car = ({ car, onPress, searchQuery }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const carName = car.name && typeof car.name === 'string' ? car.name : '';
    const isVisible = carName.toLowerCase().includes(searchQuery.toLowerCase());
    setIsVisible(isVisible);
  }, [searchQuery, car.name]);

  if (!isVisible) {
    return null; // Do not render if not visible in search
  }

  return (
    <TouchableOpacity style={styles.carContainer} onPress={onPress}>
      <View style={styles.carNameContainer}>
        <Text style={styles.carName}>{car.name}</Text>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteContainer}>
          <Image
            style={styles.carFavorite}
            source={isFavorite ? require('../assets/Favorite.png') : require('../assets/notFavorite.png')}
          />
        </TouchableOpacity>
      </View>
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
    carNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
    },
    carName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 8,
    },
    favoriteContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        position: 'relative',
        top: -4,
    },
    carFavorite: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    carImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        position: 'relative',
        top: -28,
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