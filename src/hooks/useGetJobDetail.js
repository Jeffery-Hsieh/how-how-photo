import { filter } from "lodash";
import React, { useState, useEffect } from "react";
import jobs from "../constants/jobs.json";

const useGetJobDetail = (jobId) => {
  const [jobDetail, setJobDetail] = useState({});

  useEffect(() => {
    const filteredJob = jobs.filter((job) => {
      return job.id == jobId;
    });

    setJobDetail(filteredJob[0]);
  }, []);

  return [jobDetail];
};

export default useGetJobDetail;
