import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeStack from "./screens/HomeStack";
import StoreStack from "./screens/StoreStack";
import GiftStack from "./screens/GiftStack";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={() => ({
            tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Stores"
          component={StoreStack}
          options={() => ({
            tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Gift"
          component={GiftStack}
          options={() => ({
            tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
            headerShown: false,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
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

function TabBarIcon(props) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}
