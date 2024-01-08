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
      backgroundColor: "#F8F6F6",
    }
});

export default Home;