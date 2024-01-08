import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

import car from '../components/car';

const Catalogue = ({ navigation }) => {
  const [car, getCar] = useState([]);

  const getCatalogue = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:56852/api/cars/";
      }
      else {
        url = "http://cms-examen.ddev.site/api/cars/";
      }

      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      getCar(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCatalogue();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Craft Headline</Text>
      <FlatList
        style={styles.list}
        data={car}
        keyExtractor={item => item.name}//gebruik naam als key
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            item.image = item.image.replace('cms-examen.ddev.site', '10.0.2.2:56852')
          }
          return <Car
            name={item.name}
            title={item.title}
            image={item.image}
            summary={item.summary}
            onSelectArticle={(selectedName) => { navigation.navigate('Details', { name: selectedName }) }}
          />
        }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#F8F6F6",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center"
  }
});

export default Catalogue;