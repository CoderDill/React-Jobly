import { useEffect, useState } from "react";
import JoblyApi from "../api/JoblyAPI";
import JobCard from "./JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([])

  useEffect(function getAllJobs() {
    search()
  }, [])

  async function search() {
    let jobs = await JoblyApi.getJobs()
    setJobs(jobs)
  }

  return (
    <>
      <div>Jobs</div>
      <JobCard jobs={jobs}/>
    </>
  );
}

export default Jobs;
