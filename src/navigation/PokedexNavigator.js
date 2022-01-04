import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

export default function PokedexNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokeDex"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
