import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <View style={styles.screen}>
          <Image source={require('../assets/WRS-logo.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to WRS car renting</Text>
          <Text style={styles.text}>Check out our catalogue of vehicles below</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WRS - Catalogue')}
          >
              <Text style={styles.buttonText}>Open the catalogue</Text>
          </TouchableOpacity>
        </View>
    );
  }

const styles = StyleSheet.create({
    screen: {
      padding: 24,
      color: "#fff",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#03C04A",
    },
    logo: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginBottom: 80,
    },
    title: {
      fontSize: 24,
      marginBottom: 24,
      fontWeight: "bold",
      color: "#fff",
    },
    text: {
      fontSize: 18,
      marginBottom: 24,
      color: "#fff",
    },
    button: {
      backgroundColor: '#FFF',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 16,
      width: '90%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#03C04A',
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
});

export default Home;