import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const FloatingActionButton = ({ title, onPress }) => {
  const [fontLoaded] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>Join Now</Text>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "SourceSansPro_600SemiBold",
  },
  fab: {
    position: "absolute",
    bottom: 85,
    zIndex: 10,
    right: 20,
    backgroundColor: "rgb(1,136,70)",
    padding: 25,
    borderRadius: 35,
  },
});
