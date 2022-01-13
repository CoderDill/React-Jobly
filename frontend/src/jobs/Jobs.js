import { useEffect, useState } from "react";
import JoblyApi from "../api/JoblyAPI";
import Job from "./Job";

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
      <Job jobs={jobs}/>
    </>
  );
}

export default Jobs;
