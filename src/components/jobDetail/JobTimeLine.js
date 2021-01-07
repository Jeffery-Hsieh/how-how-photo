import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Timeline from "react-native-timeline-flatlist";

const Description = ({ title, name, date }) => (
  <View style={styles.descriptionView}>
    <Text style={styles.descriptionTitle}>{title}</Text>
    <View style={styles.descriptionContent}>
      {name ? (
        <Text style={styles.descriptionText}>聯絡窗口：{name}</Text>
      ) : null}
      {date ? (
        <Text style={styles.descriptionText}>執行日期：{date}</Text>
      ) : null}
    </View>
  </View>
);

const FINISHEDICON = require("../../assets/icons/circle-checked.png");
const STARTICON = require("../../assets/icons/circle.png");

const JobTimeline = ({ status, moveToNextScreen }) => {
  const isFinished = status === "finished";

  const data = [
    {
      description: (
        <Description title={"正在找人選"} name={"王小明"} date={"2020/12/09"} />
      ),
      icon: FINISHEDICON,
    },
    {
      description: (
        <Description title={"確認人選中"} name={"王小明"} date={"2020/12/11"} />
      ),
      icon: FINISHEDICON,
    },
    {
      description: (
        <Description title={"雙方討論中"} name={"陳大東"} date={"2020/12/13"} />
      ),
      icon: FINISHEDICON,
      lineColor: isFinished ? "#000000" : "#00000035",
    },
    {
      description: (
        <Description title={"執行中"} name={"陳大東"} date={"尚未執行"} />
      ),
      icon: isFinished ? FINISHEDICON : STARTICON,
      lineColor: isFinished ? "#000000" : "#00000035",
    },
    {
      description: (
        <Description title={"結案中"} name={"王小明"} date={"尚未執行"} />
      ),
      icon: isFinished ? FINISHEDICON : STARTICON,
      lineColor: isFinished ? "#000000" : "#00000035",
    },
    {
      description: (
        <Description title={"匯款中"} name={"陳大東"} date={"尚未執行"} />
      ),
      icon: isFinished ? FINISHEDICON : STARTICON,
      lineColor: isFinished ? "#000000" : "#00000035",
    },
    {
      description: <Description title={"撥款完成"} />,
      icon: isFinished ? FINISHEDICON : STARTICON,
      lineColor: isFinished ? "#000000" : "#00000035",
    },
  ];

  return (
    <Timeline
      style={styles.list}
      data={data}
      onEventPress={moveToNextScreen}
      innerCircle={"icon"}
      circleColor="#ffffff"
      lineColor={"#000000"}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 20,
  },
  descriptionView: {
    width: 200,
    height: 84,
    alignItems: "center",
    marginTop: -20,
  },
  descriptionTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
  },
  descriptionContent: {
    alignItems: "center",
  },
  descriptionText: {
    color: "#00000070",
    marginBottom: 8,
  },
});

export default JobTimeline;
