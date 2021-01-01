import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Tag from "./Tag";
import { SvgXml } from "react-native-svg";

const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><path fill="#00c300" d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"/><path fill="#fff" d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"/></svg>`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="30px" />;

const JobItem = ({
  id,
  title,
  sendAt,
  start_time,
  end_time,
  platform,
  location,
  contact,
  status,
  moveToNextScreen,
}) => {
  // TODO: svgIcon
  return (
    <TouchableOpacity style={styles.container} onPress={moveToNextScreen}>
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="large"
        source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
      />
      <View style={styles.description}>
        <View style={styles.titleView}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {status == "proceeding" ? <SvgImage /> : <Tag text={"尚未評價"} />}
        </View>
        <View style={styles.rowView}>
          <Icon
            type="material-community"
            containerStyle={styles.icon}
            name="clock-time-three-outline"
          />
          <Text>{`${start_time || sendAt} ~`}</Text>
          <Text>{end_time}</Text>
        </View>
        <View style={styles.rowView}>
          <Icon
            type="material-community"
            containerStyle={styles.icon}
            name="map-marker"
            size={20}
          />
          <Text>{location}</Text>
        </View>
        <View style={styles.rowView}>
          <Icon
            type="material-community"
            containerStyle={styles.icon}
            name="phone"
            size={20}
          />
          <Text>{contact}</Text>
        </View>
      </View>
      <Icon
        type="material-community"
        containerStyle={styles.rightBtn}
        name="chevron-right"
        onPress={moveToNextScreen}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C6DCDC",
    borderRadius: 8,
    marginBottom: 24,
    paddingLeft: 8,
    paddingVertical: 8,
  },
  avatar: {
    marginRight: 16,
  },
  description: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
  titleView: {
    flex: 1,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#120E21",
    fontWeight: "bold",
    fontSize: 20,
  },
  rowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  rightBtn: {
    marginRight: 20,
  },
});

export default JobItem;
