import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailByUrlApi } from "../api/pokemon";

import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  // estado, funcion que se ejecuta
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  // console.log("pokemons=> ", pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      // console.log(response);
      const pokemonsArray = [];
      // for asyncrono
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemon={loadPokemon}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
