import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Car from '../components/car';

const SingleCar = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.screen}>
      <Car carName={name} />
      <Button
        title="back to catalogue"
        onPress={() => navigation.navigate('catalogue')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F8F6F6",
  }
});
export default SingleCar;