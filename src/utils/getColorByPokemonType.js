import { POKEMON_TYPE_COLORS } from "./Constants";

const getColorByPokemonType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
};
export default getColorByPokemonType;
