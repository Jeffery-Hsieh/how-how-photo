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
  phone,
  description,
  moveToNextScreen,
}) => {
  return (
    <View style={styles.container}>
      <JobDetailHeader
        id={id}
        name={sender}
        platform="HOW"
        workerNum={2}
        price={"15K"}
        avatarOnPress={moveToNextScreen}
      />
      <JobDetailSubHeader
        id={id}
        facebookId={facebookId}
        lineId={lineId}
        phone={phone}
      />
      <Divider />
      <JobDescription text={description} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default JobInfo;
