import React, { useState, useEffect } from "react";
import jobExamples from "../constants/jobs.json";

const useGetJobs = (initStatus) => {
  const [status, setStatus] = useState(initStatus);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const response = jobExamples.filter((job) => {
      return job.status == status;
    });
    setJobs(response);
  }, [status]);

  return [jobs, { setJobs, setStatus }];
};

export default useGetJobs;
