import { useEffect, useState } from "react";
import Company from "./Company";
import JoblyApi from "./JoblyAPI";

function Companies() {
  //get all companies, loop through companies to display a Company
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    async function search() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    search();
  }, []);

  return (
    <>
      <div>Companies</div>
      
      {companies.map((company) => (
        <Company company={company} />
      ))}
    </>
  );
}

export default Companies;
