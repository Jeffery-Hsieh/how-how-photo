import React, { useState, useEffect } from "react";
import userExamples from "../constants/users.json";

const useGetUsers = (userId) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (userId) {
      const userFiltered = userExamples.filter((user) => {
        return user.id == userId;
      });
      setUsers(userFiltered);
    } else {
      setUsers(userExamples);
    }
  }, []);

  return [users];
};

export default useGetUsers;
