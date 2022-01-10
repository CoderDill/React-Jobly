import { useEffect, useState } from "react";
import Company from "./Company";
import JoblyApi from "./JoblyAPI";

function Companies() {
  //get all companies, loop through companies to display a Company
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <>
      <div>Companies</div>
      
    </>
  );
}

export default Companies;
