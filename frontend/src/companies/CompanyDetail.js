import { useEffect } from "react";
import { useParams, useState } from "react-router-dom";
import JoblyApi from "../api/JoblyAPI";
import Jobs from "../jobs/Jobs";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyAndJobs() {
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }
      getCompany();
    },
    [handle]
  );

  return (
    <>
      <h4>{company.name}</h4>
      <p>{company.description}</p>
      <Jobs jobs={company.jobs} />
    </>
  );
}

export default CompanyDetail;
