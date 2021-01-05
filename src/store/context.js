import React, { createContext, useState } from "react";
import firebase from "../services/firebase";
import { userHack } from "../store/constant";

const initialState = {
  user: {
    ...userHack[0],
  },
  authenticated: false,
  firebase,
};

const SessionContext = createContext(initialState);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(initialState);

  return (
    <SessionContext.Provider value={[session, setSession]}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
