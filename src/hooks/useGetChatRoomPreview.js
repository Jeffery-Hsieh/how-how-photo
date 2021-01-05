import React, { useState } from "react";
import Messages from "../constants/messages.json";

const useGetChatRoomPreview = () => {
  const [messagePreview, setMessagePreview] = useState(Messages);

  return messagePreview;
};

export default useGetChatRoomPreview;
