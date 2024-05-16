import { StyleSheet } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import backgroundImage from "../assets/images/backGround.webp";
import Logo from "../assets/images/logo.png"

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage}/>
      <Image source={Logo} style={styles.logo}></Image>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginButton}><Text>Iniciar sesión</Text></TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}><Text>Primera vez?</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  backgroundImage:{
    position: "absolute",
    zIndex: -3,
    right: -400,
    top: 0,
    height: "100%"
  },
  logo:{
    width: 250,
    height: 250,
  },
  buttons:{
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: "70%",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  loginButton:{
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: "#E3BA96"
  },
  registerButton:{
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#333136',
  },
});
