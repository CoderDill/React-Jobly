

function Companies() {

    //get all companies, loop through companies to display a Company
    return (
        <>
            <div>Companies</div>
            {companies.map(company => {
                <div>{company }</div>
            })}
        </>
    )
}

export default Companies