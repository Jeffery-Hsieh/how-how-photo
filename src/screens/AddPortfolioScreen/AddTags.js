import React from "react";
import { ScrollView } from "react-native";
import PortTag from "../../components/addPortfolio/PortTag";

const AddTags = ({ pieces, onTagPress }) => {
  const descriptionList = Object.keys(pieces).map((id) => {
    const { uri, description, tags } = pieces[id];
    return (
      <PortTag
        key={id}
        id={id}
        imageURI={uri}
        description={description}
        tags={tags}
        onTagPress={onTagPress}
      />
    );
  });

  return <ScrollView>{descriptionList}</ScrollView>;
};

export default AddTags;
