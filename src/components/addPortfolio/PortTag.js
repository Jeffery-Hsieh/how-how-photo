import React, { useState } from "react";
import {
  Dimensions,
  Button,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import TagInput from "react-native-tags-input";

import Tag from "../ui/Tag";
import _ from "lodash";

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

const mainColor = "#3ca897";

const PortTag = ({ id, imageURI, description, tags, onTagPress }) => {
  const [randTagOptions] = useState(_.sampleSize(tagOptions, 3));
  const [customTags, setCustomTags] = useState({
    tag: "",
    tagsArray: [],
  });

  const [tagsColor, setTagsColor] = useState(mainColor);
  const [tagsText, setTagsText] = useState("#fff");

  const updateTags = (state) => {
    setCustomTags(state);
  };

  const handleFocus = () => {
    setTagsColor("#fff");
    setTagsText(mainColor);
  };

  const handleBlur = () => {
    setTagsColor(mainColor);
    setTagsText("#fff");
  };

  return (
    <View key={id} style={styles.portfolioView}>
      <View style={[styles.cardView]}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <View style={styles.infoView}>
          <Text style={styles.infoTitle}>簡介</Text>
          <Text style={styles.infoText}>{description}</Text>
        </View>
        <View style={styles.tagView}>
          <Text style={styles.tagTitle}>推薦標籤</Text>
          <View style={styles.tagGrid}>
            {randTagOptions.map((tag) => (
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
        <View style={styles.tagInputView}>
          <Text style={styles.tagInputTitle}>自定義標籤</Text>
          <TagInput
            updateState={updateTags}
            tags={customTags}
            placeholder="Tags..."
            label="透過空白鍵新增自定義標籤"
            labelStyle={{ color: "#fff" }}
            leftElement={
              <Icon
                name={"tag-multiple"}
                type={"material-community"}
                color={tagsText}
              />
            }
            leftElementContainerStyle={{ marginLeft: 12 }}
            inputContainerStyle={[
              styles.textInput,
              { backgroundColor: tagsColor },
            ]}
            containerStyle={{ paddingHorizontal: 0 }}
            labelStyle={{ color: "#000" }}
            inputStyle={{ color: tagsText }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoCorrect={false}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            keysForTag={", "}
          />
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
  tagView: {
    width: "100%",
    marginBottom: 24,
  },
  tagTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  tagGrid: {
    flexDirection: "row",
  },
  tagInputView: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  tagInputTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: "#fff",
  },
  tagText: {
    color: "#3ca897",
  },
});

export default PortTag;
