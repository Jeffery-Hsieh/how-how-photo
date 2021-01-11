import React, { createContext, useState } from "react";
import firebase from "../services/firebase";
import jobExamples from "../constants/jobs.json";
import users from "../constants/users.json";

const initialState = {
  user: users[0],
  jobs: jobExamples,
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
