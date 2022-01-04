expo init pokedex
https://reactnavigation.org/docs/getting-started/
instalar reactnativ 5
yarn add @react-navigation/native@^5.x

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

dentro de App.js

    import 'react-native-gesture-handler';
    navigation container
    import { NavigationContainer } from "@react-navigation/native";
    export default function App() {
        return (
            <NavigationContainer>
            <View style={styles.container}>
                <Text>Estamos en la pokedex</Text>
                <StatusBar style="auto" />
            </View>
            </NavigationContainer>
        );


    }

Hello React Navigation
yarn add @react-navigation/stack@^5.x
Tab navigation
yarn add @react-navigation/bottom-tabs@^5.x
Iconos
yarn add react-native-vector-icons

yarn add lodash
-- validacion de formularios --
yarn add formik yup
