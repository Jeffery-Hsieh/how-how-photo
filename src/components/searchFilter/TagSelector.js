import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tag from "../ui/Tag";

export const TagSelector = ({ title, tags, selectedTags, handleTagSelect }) => {
  return (
    <>
      <Text style={styles.selectorTitle}>{title}</Text>
      <View style={styles.tagList}>
        {tags.map((item) => (
          <Tag
            key={item.label}
            containerStyle={styles.tag}
            text={item.value}
            onTagPress={() => handleTagSelect(item.value)}
            isSelected={selectedTags.has(item.value)}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  selectorTitle: {
    color: "#6D6D72",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tagList: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    marginBottom: 12,
  },
});

export default TagSelector;
