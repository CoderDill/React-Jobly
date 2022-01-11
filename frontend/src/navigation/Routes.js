import Home from "../homepage/Home";
import Companies from "../companies/Companies";
import Jobs from "./Jobs";
import Company from "./Company";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import Profile from "../profile/Profile";
import { Route, Switch, Redirect } from "react-router-dom";


function Routes() {
  return (
    <Switch>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/companies/:handle">
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
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
