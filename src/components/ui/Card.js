import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Icon, Rating } from "react-native-elements";

const Card = () => {
  return (
    <TouchableOpacity style={styles.cardView} onPress={moveToNextScreen}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Avatar
            rounded
            containerStyle={styles.avatarImage}
            size="large"
            source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
          />
          <Rating
            readonly
            style={styles.avatarRating}
            ratingImage={STAR_IMAGE}
            type="custom"
            ratingCount={5}
            imageSize={16}
            startingValue={rating}
            ratingColor="#99C1DE"
          />
        </View>
        <View styles={styles.cardContentView}>
          <Text style={styles.cardContentTitle}>{name}</Text>
          <Text style={styles.cardContentText}>{occupation}</Text>
          <Text>{skills}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  style,
});

export default Card;
