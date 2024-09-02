import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Now = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const api_key = '0a227c8ceb0c37b09abcb3f32e4a8f8f';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View style={{ flex: 2,backgroundColor:"#1e293b" }}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("MovieDetails", { movieId: item.id })
            }
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
              style={styles.cardImg}
            />
            <Text style={styles.cardText}>{item.title}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.cardText}>{item.original_language}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={24} color="gold" />
                <Text style={styles.rating}>{item.vote_average}</Text>
               
              </View>
              <Button
              
                  title="Add to fav"
       color="#fca5a5"
                  onPress={() => {
                    dispatch(toggle(item));
                    console.log("pressed");
                  }}
                />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#a3a3a3',
    borderRadius: 10,
    elevation: 3,
  },
  cardImg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Now;
