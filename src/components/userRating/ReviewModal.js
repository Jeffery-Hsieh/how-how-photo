import React, { useState } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  View,
  TextInput,
  Modal,
  Text,
} from "react-native";

import { Icon, Rating } from "react-native-elements";

const STAR_IMAGE = require("../../assets/star.png");

const ReviewModal = ({ modalVisible, setModalVisible, handleReviewAdd }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const handleBtnPress = () => {
    handleReviewAdd(review, rating);
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>你的評論</Text>
          <TextInput
            style={styles.modalText}
            value={review}
            multiline={true}
            onChangeText={(text) => setReview(text)}
          />

          <Rating
            style={styles.reviewRating}
            ratingImage={STAR_IMAGE}
            type="custom"
            ratingCount={5}
            imageSize={36}
            startingValue={rating}
            ratingColor="#99C1DE"
            onFinishRating={(newValue) => setRating(newValue)}
          />
          <View style={styles.footer}>
            <TouchableHighlight
              underlayColor="#ffffff"
              onPress={() => setModalVisible(false)}
            >
              <View style={[styles.btnView, styles.cancelBtnView]}>
                <Text style={[styles.btnText, styles.cancelBtnText]}>
                  Cancel
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#ffffff"
              onPress={handleBtnPress}
            >
              <View style={[styles.btnView, styles.postBtnView]}>
                <Text style={[styles.btnText, styles.postBtnText]}>POST</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    width: "100%",
    minHeight: 100,
    marginBottom: 15,
    borderWidth: 2,
  },
  reviewRating: {
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  footer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  btnText: {
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  cancelBtnView: {
    borderWidth: 2,
    borderColor: "#DADCE0",
    marginRight: 12,
  },
  postBtnView: {
    backgroundColor: "#1A73E8",
  },
  postBtnText: {
    paddingHorizontal: 16,
    color: "#ffffff",
  },
});

export default ReviewModal;
