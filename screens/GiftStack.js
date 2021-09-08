import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GiftScreen from "./Gift/GiftScreen";

const Stack = createNativeStackNavigator();
const GiftStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GiftScreen"
        component={GiftScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GiftStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
