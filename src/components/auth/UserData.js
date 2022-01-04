import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth";

import { user_details } from "../../utils/userDB";

export default function UserData() {
  const { auth, logout } = useAuth();
  console.log(auth);

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="UserName" text={auth.username} />
        <ItemMenu title="email" text={auth.email} />
        <ItemMenu title="Total Favorites" text={`${0} Pokemons`} />
      </View>
      <Button title="Logout" styles={styles.logout} onPress={() => logout()} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 20,
    width: 120,
  },
  logout: {
    paddingTop: 20,
    alignItems: "center",
    marginBottom: 10,
  },
});
