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
      <h1>Companies</h1>
      {companies.map((c) => (
        <Company
          key={c.handle}
          handle={c.handle}
          description={c.description}
          logoUrl={c.logoUrl}
          name={c.name}
        />
      ))}
    </>
  );
}

export default Companies;
