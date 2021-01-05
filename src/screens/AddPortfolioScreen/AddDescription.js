import React from "react";
import { ScrollView } from "react-native";
import PortDescription from "../../components/addPortfolio/PortDescription";

const AddDescription = ({ pieces, changeDescription }) => {
  const descriptionList = Object.keys(pieces).map((id) => {
    const { uri } = pieces[id];
    return (
      <PortDescription
        key={id}
        id={id}
        imageURI={uri}
        changeDescription={changeDescription}
      />
    );
  });

  return <ScrollView>{descriptionList}</ScrollView>;
};

export default AddDescription;
