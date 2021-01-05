import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import AppBtn from "../ui/AppBtn";

const description = {
  workers: [
    {
      occupation: "導演\n-陳大明",
      hasReview: true,
    },
    {
      occupation: "製片\n-吳曉東",
      hasReview: false,
    },
    {
      occupation: "髮妝\n-林阿月",
      hasReview: false,
    },
  ],
  date:
    "定裝日：12/9(三)\n廣告拍攝日：12/19(六)\n廣告雨備日：12/20(日)\n12/12(六)、12/13(日)：\n以防萬一希望也能保留 主要還是以19、20為主\n平面拍攝日：12/24(四)",
  price: "＄15000\n一天廣告拍攝\n8小時(含梳化)\n一天平面拍攝\n4小時(不含梳化)",
};

const JobInfo = ({ reviewEnabled, moveToNextScreen }) => {
  const { workers, date, price } = description;
  const workerItems = workers.map((worker) => (
    <View key={worker.occupation} style={styles.workerView}>
      <Text style={styles.text}>{worker.occupation}</Text>
      {reviewEnabled && (
        <AppBtn
          containerStyle={[!worker.hasReview && { backgroundColor: "#FD9494" }]}
          tagStyle={styles.reviewTagText}
          onTagPress={moveToNextScreen}
          text={worker.hasReview ? "已評價" : "尚未評價"}
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
