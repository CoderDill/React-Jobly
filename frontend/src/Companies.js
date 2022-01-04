import { useState } from "react"
import Company from "./Company"


function Companies() {
    //get all companies, loop through companies to display a Company
    const [companies, setCompanies] = useState(null)
    return (
        <>
            <div>Companies</div>
            {companies.map(company => (
                <Company company={company}/>
            ))}
        </>
    )
}

export default Companies