import { useState } from "react";
import Job from "./Job";

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
