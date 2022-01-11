import { useState } from "react";
import Job from "./jobs/Job";

function Jobs() {
  const [job, setJob] = useState(null)


  return (
    <>
      <div>Jobs</div>
      <Job job={job}/>
    </>
  );
}

export default Jobs;
