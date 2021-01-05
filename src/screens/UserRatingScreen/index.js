import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar, Rating, Icon } from "react-native-elements";
import Rate from "../../components/ui/Rate";
import ReviewModal from "../../components/userRating/ReviewModal";

const STAR_IMAGE = require("../../assets/star.png");

const REVIEWS = [
  { name: "Kyle Wilson", review: "棒！", date: "2020/05/03", rating: 4.3 },
  {
    name: "Rosemary Copler",
    review: "準時敬業！",
    date: "2020/02/03",
    rating: 5,
  },
  {
    name: "Soham Pena",
    review: "風格多變化～演技好",
    date: "2020/02/17",
    rating: 3,
  },
  { name: "Calvin Watson", review: "演技不錯", date: "2020/01/19", rating: 2 },
];

const UserRatingScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reviews, setReviews] = useState(REVIEWS);

  const handleReviewAdd = (review, rate) => {
    let newReviews = [
      {
        name: "陳大東",
        review: review,
        date: new Date().toISOString().slice(0, 10),
        rating: rate,
      },
    ];
    newReviews.push(...reviews);
    setReviews(newReviews);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReviewModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleReviewAdd={handleReviewAdd}
      />
      <Text style={styles.title}>評價</Text>
      <View style={styles.avatarView}>
        <Avatar
          rounded
          containerStyle={styles.avatar}
          size="large"
          source={{ uri: "https://i.pravatar.cc/300?img=49" }}
        />
        <View>
          <Text style={styles.infoTitle}>陳小美</Text>
          <Text style={styles.infoText}>演員</Text>
        </View>
      </View>
      <View style={styles.latestReviewView}>
        <Text style={styles.latestReviewText}>{`${REVIEWS.length}則評論`}</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={{ fontSize: 40, marginRight: 4 }}>{`${3.5}`}</Text>
            <Text style={{ marginBottom: 8 }}>評價</Text>
          </View>
          <Rating
            readonly
            style={styles.reviewRating}
            ratingImage={STAR_IMAGE}
            type="custom"
            ratingCount={5}
            imageSize={16}
            startingValue={4.5}
            ratingColor="#99C1DE"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.addReviewView}
        onPress={() => setModalVisible(true)}
      >
        <Icon
          type="material-community"
          name="comment-edit-outline"
          color="#1A73E8"
        />
        <Text style={styles.addReviewViewTitle}>新增評論</Text>
      </TouchableOpacity>
      <View style={styles.reviewView}>
        {reviews.map((review) => (
          <Rate key={review.name} {...review} />
        ))}
      </View>
      {modalVisible && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#00000050",
          }}
        ></View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    marginRight: 12,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#979797",
  },
  latestReviewView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  latestReviewText: {
    fontSize: 20,
  },
  reviewRating: {
    width: 80,
  },
  addReviewView: {
    borderColor: "#979797",
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 12,
  },
  addReviewViewTitle: {
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
  },
  addReviewViewText: {
    minHeight: 60,
    borderWidth: 1,
    marginBottom: 24,
  },
});

export default UserRatingScreen;
