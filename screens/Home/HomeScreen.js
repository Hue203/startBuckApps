import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Confetti from "../../assets/icon12.png";

import FloatingActionButton from "../../components/FloatingActionButton";

const HomeScreen = ({ navigation: { navigate } }) => {
  const [fontLoaded] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });
  const [pctScrolled, setPctScrolled] = useState(0);
  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const maxOffset = contentSize.height - layoutMeasurement.height + 100;
    setPctScrolled(contentOffset.y / maxOffset);
  };
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView>
      <ScrollView
        onScroll={handleScroll}
        stickyHeaderIndices={[1]}
        scrollEventThrottle={16}
      >
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.headerText}>It's a great day for coffee</Text>
            <Fontisto name="coffeescript" size={24} color="white" />
          </View>
        </View>
        <View style={styles.headerMenu}>
          <Text style={styles.headerMenuText}>
            <FontAwesome5
              name="user-circle"
              size={24}
              color="white"
              style={styles.headerMenuText}
            />
            Sign In
          </Text>

          <Text style={styles.headerMenuText}>
            <MaterialIcons
              name="forward-to-inbox"
              size={24}
              color="white"
              style={styles.headerMenuText}
            />
            Inbox
          </Text>
        </View>

        <View>
          <Text style={{ height: 300, backgroundColor: "pink" }}>
            Earning Reward
          </Text>
        </View>
        <View style={{ height: 300, backgroundColor: "brown" }}>
          <Text>Save time to skip the line</Text>
        </View>
        <View style={{ height: 300, backgroundColor: "pink" }}>
          <Text>Gifting is so easy</Text>
        </View>
        <View
          style={{
            ...styles.bottomParty,
            opacity: pctScrolled,
            transform: [{ scale: pctScrolled < 1 ? pctScrolled : 1 }],
          }}
        >
          <Image source={Confetti} />
          <Text style={styles.bottomPartyText}> You are up today!</Text>
        </View>
      </ScrollView>
      <View>
        <FloatingActionButton onPress={() => navigate("JoinScreen")} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(27, 27, 27)",
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerInner: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "SourceSansPro_600SemiBold",
    paddingBottom: 10,
  },
  headerMenu: {
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgb(27,27, 27)",
    // borderColor: "red",
    // borderWidth: 2,
  },
  headerMenuText: {
    color: "white",
    padding: 20,
  },

  bottomParty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomPartyText: {
    color: "white",
  },
});
