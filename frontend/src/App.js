import "./App.css";
import { useState } from "react";
import NavBar from "./navigation/NavBar";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./auth/UserContext";
import Routes from "./navigation/Routes";

function App() {
  const [currUser, setCurrentUser] = useState(null);
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={currUser}>
        <div className="App">
          <NavBar />
          <main>
            <Routes />
          </main>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
