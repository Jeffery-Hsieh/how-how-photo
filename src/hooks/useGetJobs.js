import React, { useState, useEffect } from "react";
import jobExecuted from "../constants/jobExecuted.json";
import jobFinished from "../constants/jobFinished.json";
import newJobs from "../constants/newJobs.json";

const useGetJobs = (initStatus = "proceeding") => {
  const [status, setStatus] = useState(initStatus);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    switch (status) {
      case "start":
        setJobs(newJobs);
        break;
      case "proceeding":
        setJobs(jobExecuted);
        break;
      case "finished":
        setJobs(jobFinished);
        break;
      default:
        console.log("Wrong with jobs status");
    }
  }, [status]);

  return [jobs, setStatus];
};

export default useGetJobs;
