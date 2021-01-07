import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Icon } from "react-native-elements";

import AddDescription from "./AddDescription";
import AddPhotos from "./AddPhotos";
import AddTags from "./AddTags";
import { TouchableOpacity } from "react-native-gesture-handler";

const SLIDER_WIDTH = Dimensions.get("window").width;

const AddPortfolioScreen = ({ navigation, route }) => {
  const [entries, setEntries] = useState([
    {
      title: "上傳檔案",
      text: "首先，請上傳您的作品集，可包含圖片、影片、音檔...",
    },
    {
      title: "文字敘述",
      text: "請在300字以內介紹你在作品集中擔任的角色與功能",
    },
    {
      title: "加上標籤",
      text:
        "請選擇適合的標籤讓其他人能更快搜尋到你的作品集，另外也可以自行創建具個人風格的tag",
    },
  ]);
  const { addImages } = route.params;
  const [activeSlide, setActiveSlide] = useState(0);
  const [pieces, setPieces] = useState({});
  const [pieceId, setPieceId] = useState(200);

  const handlePhotoIncrement = () => {
    const newImageURI = `https://picsum.photos/id/${pieceId}/300/200`;
    setPieces({
      ...pieces,
      [pieceId]: {
        uri: newImageURI,
        description: "",
        tags: new Set(),
      },
    });
    setPieceId(pieceId + 1);
  };

  const handleDescriptionChange = (id, newText) => {
    let newPieces = { ...pieces };
    newPieces[id].description = newText;
    setPieces(newPieces);
  };

  const handleTagChange = (id, newTag) => {
    let newPieces = { ...pieces };
    if (newPieces[id].tags.has(newTag)) {
      newPieces[id].tags.delete(newTag);
    } else {
      newPieces[id].tags.add(newTag);
    }
    setPieces(newPieces);
  };

  const removePiece = () => {};

  const handelComplete = () => {
    const newImages = Object.keys(pieces).map((key) => {
      return { id: key, uri: pieces[key].uri };
    });
    addImages(newImages);
    navigation.goBack();
  };

  const photos = Object.keys(pieces).map((id) => {
    return { id: id, uri: pieces[id].uri };
  });

  const _renderItem = ({ item, index }) => {
    switch (index) {
      case 0:
        return <AddPhotos photos={photos} addPhoto={handlePhotoIncrement} />;
      case 1:
        return (
          <AddDescription
            pieces={pieces}
            changeDescription={handleDescriptionChange}
          />
        );
      case 2:
        return <AddTags pieces={pieces} onTagPress={handleTagChange} />;
    }
  };

  const pagination = (
    <>
      <View style={instructionStyle.view}>
        <Text style={instructionStyle.title}>{entries[activeSlide].title}</Text>
        <Text style={instructionStyle.text}>{entries[activeSlide].text}</Text>
      </View>
      {activeSlide == 2 && (
        <View style={instructionStyle.closeView}>
          <TouchableOpacity
            style={instructionStyle.closeBtn}
            onPress={handelComplete}
          >
            <Text style={instructionStyle.closeBtnText}>完成</Text>
          </TouchableOpacity>
        </View>
      )}
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "#DBE7E4" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#B0ACAC",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#979797", paddingTop: 50 }}
    >
      <View style={{ flex: 1 }}>
        <Carousel
          layout={"default"}
          data={entries}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
      {pagination}
    </SafeAreaView>
  );
};

const instructionStyle = StyleSheet.create({
  view: {
    backgroundColor: "#DBE7E4",
    height: 180,
    padding: 52,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EDAB57",
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
  },
  closeView: {
    backgroundColor: "#DBE7E4",
    alignItems: "center",
  },
  closeBtn: {
    backgroundColor: "#BCD4E6",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  closeBtnText: {
    fontWeight: "bold",
  },
});

export default AddPortfolioScreen;
