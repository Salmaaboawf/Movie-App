import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

const MovieDetails = () => {
  const route = useRoute();
  const { movieId } = route.params;

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const api_key = '0a227c8ceb0c37b09abcb3f32e4a8f8f';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]); 

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      ) : (
        movieDetails && (
          <View style={styles.detailsContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` }}
              style={styles.cardImg}
            />
            <Text style={styles.title}>{movieDetails.title}</Text>
            <Text style={styles.overview}>{movieDetails.overview}</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Added background color for better contrast
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardImg: {
    width: '100%',
    height: 300, // Adjusted height for better visibility
    borderRadius: 10,
    marginBottom: 16,
  },
});

export default MovieDetails;
