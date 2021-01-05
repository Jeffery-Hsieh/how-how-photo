import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import AddBtn from "../../components/ui/AddBtn";

const AddPhotos = ({ photos, addPhoto }) => {
  const imageList = photos.map((photo) => (
    <View key={photo.id} style={styles.imageView}>
      <Image style={styles.image} source={{ uri: photo.uri }} />
    </View>
  ));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {imageList}
      <AddBtn containerStyle={styles.addBtnView} onPress={addPhoto} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#979797",
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    margin: 12,
    marginBottom: 12,
    borderRadius: 10,
    aspectRatio: 3 / 2,
  },
  image: {
    width: "90%",
    aspectRatio: 3 / 2,
  },
  addBtnView: {
    marginTop: 12,
    width: "88%",
  },
});

export default AddPhotos;
