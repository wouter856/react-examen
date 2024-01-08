import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const car = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.name)}>
      <View style={styles.car}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
          style={styles.banner}
          source={{
            uri: props.image
          }}
        />
        <Text style={styles.intro}>{props.summary}</Text>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  car: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  image: {
    height: 100
  },
  title: {
    fontWeight: "bold",
    color: "#D24335",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },
  summary: {
    marginBottom: 8
  }
});
export default car;