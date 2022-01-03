import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value>
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
