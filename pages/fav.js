import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { toggle} from "../store/slices/favSlice";

const Fav = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const fav = useSelector((state) => state.fav.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update local state when Redux state changes
    setMovies(fav);
  }, [fav]);

  return (
    <View style={{ flex: 2,backgroundColor:"#020617" }}>
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
            
                title="remove from fav"
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
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  cardImg: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Fav;
