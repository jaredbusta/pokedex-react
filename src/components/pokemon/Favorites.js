import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function Favorites(props) {
  const { id } = props;
  console.log(`pokemon ${id}`);
  const addFavorite = () => {
    console.log("agregar a favoritos");
  };

  return (
    <Icon
      name="heart"
      color="#FFF"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
