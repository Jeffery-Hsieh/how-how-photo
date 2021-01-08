import React, { useState, useEffect } from "react";
import userExamples from "../constants/users.json";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userExamples);
  }, []);

  return [users];
};

export default useGetUsers;
