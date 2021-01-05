import React, { useState } from "react";
import { Button, View, Image, StyleSheet, Text, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import Tag from "../ui/Tag";

const tagOptions = [
  "懸疑",
  "日系",
  "韓系",
  "清新",
  "自然",
  "嘻哈",
  "古典",
  "性感",
  "可愛",
  "歐美",
  "溫暖",
];

const PortTag = ({ id, imageURI, description, tags, onTagPress }) => {
  return (
    <View key={id} style={styles.portfolioView}>
      <View style={[styles.cardView]}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <View style={styles.infoView}>
          <Text style={styles.infoTitle}>簡介</Text>
          <Text style={styles.infoText}>{description}</Text>
        </View>
        <View style={styles.tagView}>
          <Text style={styles.tagTitle}>常用標籤</Text>
          <View style={styles.tagContainer}>
            {tagOptions.map((tag) => (
              <Tag
                key={tag}
                text={tag}
                containerStyle={{ marginBottom: 12 }}
                isSelected={tags.has(tag)}
                onTagPress={() => onTagPress(id, tag)}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioView: {
    alignItems: "center",
  },
  cardView: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 24,
    margin: 12,
    marginBottom: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    marginBottom: 32,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 8,
  },
  infoView: {
    width: "100%",
    marginBottom: 32,
  },
  infoText: {
    padding: 8,
  },
  tagTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  tagContainer: {
    paddingHorizontal: 8,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default PortTag;
