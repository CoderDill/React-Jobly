import { useEffect, useState } from "react";
import Company from "../Company";
import JoblyApi from "../api/JoblyAPI";

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
      
<<<<<<< HEAD
=======
      {companies.map((company) => (
        <Company company={company} />
      ))}
>>>>>>> ce4dfef1333bf9c55854a110f286cfab8f239fa9
    </>
  );
}

export default Companies;
