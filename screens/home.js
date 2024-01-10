import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Platform } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <View style={styles.screen}>
          <Text style={styles.title}>Craft Headlines</Text>
          <Button
            title="back to catalogue"
            onPress={() => navigation.navigate('Catalogue')}
          />
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
    }
});

export default Home;