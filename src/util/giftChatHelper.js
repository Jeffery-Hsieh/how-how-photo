import { userHack } from "../store/constant";

export const toGiftChatMessageBlock = (messageId, messageInfo) => {
  const { sendAt, sender, text, imageURI } = messageInfo;
  const currentUser = userHack.filter((user) => user.id == sender);
  return {
    _id: messageId,
    text: text,
    image: imageURI,
    createdAt: sendAt.toDate(),
    user: {
      _id: sender,
      avatar: currentUser[0].imageURI,
    },
  };
};
