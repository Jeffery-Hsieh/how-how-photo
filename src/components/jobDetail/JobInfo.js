import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import AppBtn from "../ui/AppBtn";

const JobInfo = ({ status, workers, date, price, tags, moveToNextScreen }) => {
  const workerItems = workers.map((worker) => (
    <View key={worker.occupation} style={styles.workerView}>
      <Text style={styles.text}>{worker.occupation}</Text>
      {status == "finished" && (
        <AppBtn
          containerStyle={[!worker.hasReview && { backgroundColor: "#FD9494" }]}
          tagStyle={styles.reviewTagText}
          onTagPress={moveToNextScreen}
          text={worker.hasReview ? "已評價" : "尚未評價"}
          disabled={worker.hasReview}
        />
      )}
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={styles.title}>工作人員</Text>
        {workerItems}
      </View>
      <View style={styles.cardView}>
        <Text style={styles.title}>費用</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
      <View style={styles.cardView}>
        <Text style={styles.title}>日期</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.cardView}>
        <Text style={styles.title}>搜尋標籤</Text>
        <Text style={styles.text}>{tags[0]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  cardView: {
    width: "50%",
    marginBottom: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },
  text: {
    color: "#979797",
    marginRight: 16,
  },
  reviewTagText: {
    fontSize: 12,
  },
  workerView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default JobInfo;
