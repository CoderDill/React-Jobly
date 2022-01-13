import { useEffect, useState } from "react";
import Company from "./Company";
import JoblyApi from "../api/JoblyAPI";

function Companies() {
  //get all companies, loop through companies to display a Company
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
      search();
  }, []);
  async function search() {
    let companies = await JoblyApi.getCompanies();
    setCompanies(companies);
  }
  return (
    <>
      <div>Companies</div>
      {companies.map((c) => (
        <Company
          key={c.handle}
          handle={c.handle}
          description={c.description}
          logoUrl={c.logoUrl}
        />
      ))}
    </>
  );
}

export default Companies;
