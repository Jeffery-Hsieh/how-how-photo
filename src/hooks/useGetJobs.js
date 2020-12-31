import React, { useState } from "react";
import projectExamples from "../constants/projects.json";

const useGetJobs = (progress = "sprint") => {
  const [projects, setProjects] = useState(projectExamples);
  return projects;
};

export default useGetJobs;
