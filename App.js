import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Catalogue from './screens/catalogue.js';
import SingleCar from './screens/singleCar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Catalogue" component={Catalogue} />
        <Stack.Screen name="SingleCar" component={SingleCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}