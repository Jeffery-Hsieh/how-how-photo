import React from "react";
import { Image, FlatList, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const images = [
  { id: 0, uri: require("../../assets/gallery1_1.png") },
  { id: 1, uri: require("../../assets/gallery1_2.png") },
  { id: 2, uri: require("../../assets/gallery1_3.png") },
  { id: 3, uri: require("../../assets/gallery1_4.png") },
];

const Gallery = () => {
  const renderItem = ({ item }) => (
    <Image style={styles.galleryImage} source={item.uri} />
  );

  return (
    <>
      <View style={styles.titleView}>
        <Icon
          type="material-community"
          containerStyle={styles.icon}
          color="#787885"
          name="brush"
          size={24}
          color="#E3BA28"
        />
        <Text style={styles.title}>作品集</Text>
      </View>
      <View>
        <FlatList
          data={images}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.galleryColumn}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  galleryImage: {
    width: "50%",
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12,
  },
});

export default Gallery;
