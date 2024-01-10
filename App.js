import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Catalogue from './screens/catalogue.js';
import CarDetails from './screens/carDetails.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Catalogue" component={Catalogue} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}