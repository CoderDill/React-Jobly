import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Company from "./Company";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route>
              <Home />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route path="/companies/:handle">
              <Company />
            </Route>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect to="/"/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
