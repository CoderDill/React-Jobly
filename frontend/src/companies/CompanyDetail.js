<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();
  console.debug("CompanyDetail", "handle=", handle);

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
      <div className="CompanyDetail col-md-8 offset-md-2">
        <h4>{company.name}</h4>
        <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
      </div>
=======
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
>>>>>>> a7023dd81d1aa64778333dd3b86ea23c3f495f86
  );
}

export default CompanyDetail;
