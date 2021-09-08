import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../../assets/data";

const Item = ({ imgUrl }) => {
  console.log(imgUrl);
  return (
    <View style={styles.item}>
      <Image source={{ uri: imgUrl }} style={{ width: 150, height: 100 }} />
    </View>
  );
};
const GiftScreen = () => {
  const renderItem = ({ item }) => <Item imgUrl={item.imgUrl} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </SafeAreaView>
  );
};

export default GiftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  item: {},
  title: {
    fontSize: 32,
  },
});
