import { Link } from "react-router-dom"
import './Company.css'

function Company({ name, description, logoUrl, handle }) {
  
  return (
    <Link className="Company card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h4 className="card-title">
          {name}
        </h4>
        <p>
          {description}
        </p>
      </div>
    </Link>
  );
}

export default Company;
