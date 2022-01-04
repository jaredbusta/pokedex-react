import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native"; // pra poder navegar entre screens

import { capitalize } from "lodash";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation(); // para poder cambiar de screen

  const colorType = getColorByPokemonType(pokemon.type);
  const bgStyle = { backgroundColor: colorType, ...style.bgStyle };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id }); // nombre de la screen
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyle}>
            <Text style={style.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={style.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={style.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  order: {
    color: "#fff",
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 11,
  },
});
