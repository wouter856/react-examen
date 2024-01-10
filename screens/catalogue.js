import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/*DIT IS DE CODE VOOR MOCHT DE API WERKEN, MAAR DAT IS NOOIT GELUKT
daarom heb ik zelf een aantal auto's toegevoegd in de car.js file

const Catalogue = ({ navigation }) => {
  const [car, getCar] = useState([]);

  const getCatalogue = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        url = "http://10.0.2.2:56876/api/cars/";
      } else {
        url = "http://cms-examen.ddev.site/api/cars/";
      }
  
      const response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      getCar(json.items);
    } catch (error) {
      console.error("Fetch error:", error);
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
}*/

/*catalogue zonder API*/
const Catalogue = ({ navigation }) => {
  const cars = [
    {
      name: 'Audi A1',
      summary: 'This is the summary for Car 1.',
      imageUrl: require('../assets/car-images/audi-a1.png'),
      price: 52.25,
      seats: 5,
      transmission: 'Automatic',
      doors: 4,
      description: `"It's a minor revolution : Audi returns to the versatile superminis segment with its A1. Production started on 9th September 2010 in the Audi Brussels factory in Forest, Belgium. This is currently the smallest model of the make, hence its designation ""A1"". The A1 was designed to compete with the Alfa Romeo MiTo, CitroÃ«n DS3 and the Fiat 500 as well as and in particular with the Mini, the leader in the premium superminis segment for more than 10 years. Sketched out several times by concept cars and already award-winning before its presentation ' in January 2010 it was awarded the title of ""Most Exciting Car of the Year"" by the British 'What Car?' magazine ' the definitive design of the little A1 was officially unveiled at the Geneva Motor Show in 2010. Based on the VW PQ25 platform of the Volkswagen Polo, some 100 000 Audi A1s were set, in a full year, to roll off the production lines of the Forest factory."`
    },
    {
      name: 'BMW 3 Series',
      summary: 'This is the summary for Car 2.',
      imageUrl: require('../assets/car-images/bmw-3.png'),
      price: 81.99,
      seats: 5,
      transmission: 'Automatic',
      doors: 4,
      description: 'The BMW 3 Series continues the tradition of the german design with its sleek and sporty look that gives off a dynamic character at first sight. This BMW 3 Series also impresses by the high quality of its interior materials that make the cabin simply beautiful. All amenities are easy to use and have been scrupulously ruminated to make life easier for the driver and passengers. In terms of comfort, safety and driving, this modern car is obviously at the forefront of innovation. Indeed, it offers opportunities that give new dimensions to the driving pleasure saving energy and respecting the environment.'
    },
    {
      name: 'Peugeot 5008',
      summary: 'Family SUV for all purposes',
      imageUrl: require('../assets/car-images/peugeot-5008.png'),
      price: 99.25,
      seats: 7,
      transmission: 'Manual',
      doors: 5,
      description: 'With its light signature, the new Peugeot 5008 has the elegant exterior look of the French brand. Inside, the minivan is full of classy and exclusives finishes.It is made in the best quality materials, offers the possibility to completely configure the cabin space and storage space to fit your 5008 to all your activities and many passengers and luggage with its spacious trunk. This vehicle has the latest technologies, optimal security tendering system and offers an ergonomic driving position. In summary, this new Peugeot is a true source of inspiration and sharing.'
    },
    {
      name: 'VW Multivan',
      summary: 'This is the summary for Car 4.',
      imageUrl: require('../assets/car-images/vw-multivan.png'),
      price: 113.25,
      seats: 9,
      transmission: 'Manual',
      doors: 4,
      description: `The Multivan is still attractive with its generous space. Depending on the level of finition, the second row of seats is equiped with one or two individual pivoting seats. Those are fixed to the floor with modified sliders in which they can move without having to be removed, but can also pivot and be easily adjusted thanks to bearing rollers. It is possible to lower the seats to get an even wider space at the back. Isofix achor points are on each side or the passenger seats and on the outer 3 seats bench. For users who aren't going to use the variable mounting systems, an individual passenger seat with a baby seat adapter is available. The 3 seats bench can also be replaced with individual seats.`
    },
  ];

  const handleCarPress = (car) => {
    // Navigate to the CarDetails screen and pass the selected car data
    navigation.navigate('CarDetails', { car });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.carContainer}
      onPress={() => handleCarPress(item)}
    >
      <Image source={item.imageUrl} style={styles.carImage} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carSummary}>{item.summary}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.catalogue}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = {
  catalogue: {
    flex: 1,
    padding: 16,
  },
  carContainer: {
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  carSummary: {
    fontSize: 16,
    marginTop: 4,
  },
};

export default Catalogue;