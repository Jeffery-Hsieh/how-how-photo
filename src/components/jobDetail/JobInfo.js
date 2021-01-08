import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Divider } from "react-native-elements";

import JobDetailHeader from "./Header";
import JobDetailSubHeader from "./SubHeader";
import JobDescription from "./JobDescription";

const JobInfo = ({
  id,
  sender,
  facebookId,
  lineId,
  description,
  status,
  moveToProfileScreen,
  moveToChatScreen,
}) => {
  return (
    <View style={styles.container}>
      <JobDetailHeader
        id={id}
        name={sender}
        platform="HOW"
        workerNum={2}
        price={"15K"}
        avatarOnPress={() => moveToProfileScreen(id)}
      />
      <JobDetailSubHeader
        id={id}
        facebookId={facebookId}
        lineId={lineId}
        moveToChatScreen={moveToChatScreen}
      />
      <Divider />
      <JobDescription
        text={description}
        showApplyBtn={status === "start" || status === "favorite"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default JobInfo;
