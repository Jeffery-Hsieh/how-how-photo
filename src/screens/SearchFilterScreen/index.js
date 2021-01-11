import React, { useState, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon, Divider } from "react-native-elements";

import TagSelector from "../../components/searchFilter/TagSelector";

const PLATFORM = [
  { label: "instagram", value: "instagram" },
  { label: "facebook", value: "facebook" },
  { label: "line", value: "line" },
];

const PLACES = [
  { label: "台北", value: "台北" },
  { label: "桃園", value: "桃園" },
  { label: "新竹", value: "新竹" },
  { label: "台中", value: "台中" },
  { label: "台南", value: "台南" },
  { label: "高雄", value: "高雄" },
  { label: "苗栗", value: "苗栗" },
  { label: "彰化", value: "彰化" },
  { label: "南投", value: "南投" },
  { label: "雲林", value: "雲林" },
  { label: "嘉義", value: "嘉義" },
  { label: "屏東", value: "屏東" },
  { label: "宜蘭", value: "宜蘭" },
  { label: "花蓮", value: "花蓮" },
  { label: "台東", value: "台東" },
  { label: "外島", value: "外島" },
  { label: "國內", value: "國內" },
];

const TAGS = [
  { label: "日系", value: "日系" },
  { label: "韓系", value: "韓系" },
  { label: "自然", value: "自然" },
  { label: "嘻哈", value: "嘻哈" },
  { label: "古典", value: "古典" },
  { label: "可愛", value: "可愛" },
  { label: "歐美", value: "歐美" },
  { label: "溫暖", value: "溫暖" },
];

const SearchFilterScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          style={{ marginRight: 8 }}
          type="material-community"
          name="check"
          color="green"
          onPress={() => navigation.navigate("Search", { filter: "" })}
        />
      ),
    });
  }, [navigation]);

  const [selectedTags, setSelectedTags] = useState(new Set());

  const handleTagSelect = (value) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(value)) {
      newSelectedTags.delete(value);
    } else {
      newSelectedTags.add(value);
    }
    setSelectedTags(newSelectedTags);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.selectorView}>
        <TagSelector
          title="案件來源"
          tags={PLATFORM}
          selectedTags={selectedTags}
          handleTagSelect={handleTagSelect}
        />
      </View>
      <Divider />
      <View style={styles.selectorView}>
        <TagSelector
          title="地區"
          tags={PLACES}
          selectedTags={selectedTags}
          handleTagSelect={handleTagSelect}
        />
      </View>
      <Divider />
      <View style={styles.selectorView}>
        <TagSelector
          title="標籤"
          tags={TAGS}
          selectedTags={selectedTags}
          handleTagSelect={handleTagSelect}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
  },
  selectorView: {
    marginVertical: 24,
  },
});

export default SearchFilterScreen;
