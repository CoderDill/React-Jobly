import './Home.css'
import {useState} from 'react'

function Home() {
    const [user, setUser] = useState("testuser")
  return (
    <>
          <h3>Jobly</h3>
          <h5>All the jobs in one, convenient place.</h5>
          <p>Welcome Back, {user}!</p>
    </>
  );
}

export default Home
