import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Tag from "../../components/ui/Tag";

const places = [
  "台北",
  "桃園",
  "新竹",
  "台中",
  "台南",
  "高雄",
  "苗栗",
  "彰化",
  "南投",
  "雲林",
  "嘉義",
  "屏東",
  "宜蘭",
  "花蓮",
  "台東",
  "外島",
  "國內",
];

const TAGS = [
  { id: 0, text: "日系" },
  { id: 1, text: "韓系" },
  { id: 2, text: "自然" },
  { id: 3, text: "嘻哈" },
  { id: 4, text: "古典" },
  { id: 5, text: "可愛" },
  { id: 6, text: "歐美" },
  { id: 7, text: "溫暖" },
];

const SearchFilterScreen = (props) => {
  const renderItem = ({ item }) => <Tag text={item.text} />;

  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text>Tags</Text>
        <FlatList
          style={styles.tagList}
          data={TAGS}
          renderItem={renderItem}
          numColumns={5}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.tagColumn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  tagColumn: {
    marginBottom: 12,
  },
});

export default SearchFilterScreen;
