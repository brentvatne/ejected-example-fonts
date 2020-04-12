import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Pacifico: require("./assets/Pacifico-Regular.ttf"),
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Ionicons name="ios-home" size={50} />
      <Text style={{ fontFamily: "Pacifico" }}>Here is a font!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
