import React from "react";
import { StyleSheet, Text, View, Dimensions, SectionList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import DATA_SB from "../../starbucks-hcm.json";
const StoreScreen = () => {
  const DATA = [
    {
      title: "All",
      data: [
        DATA_SB.map((data) => ({
          id: data.store.id,
          name: data.store.name,
          coordinate: data.store.coordinates,
        })),
      ],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map}>
        {DATA_SB.map((item) => (
          <Marker
            key={item.store.id}
            coordinate={item.store.coordinates}
            pinColor="green"
            onPress={() => {}}
          />
        ))}
      </MapView>
      {/* <SectionList
        style={styles.list}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      /> */}
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
