import React from "react";
import { Image, FlatList, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const Gallery = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.imageView}>
      <Image style={styles.image} source={{ uri: item.uri }} />
    </View>
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
  imageView: {
    backgroundColor: "#ffffff",
    width: "49%",
    borderRadius: 8,
    marginRight: 6,
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },
});

export default Gallery;
