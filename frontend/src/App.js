import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Companies from './Companies'
import Jobs from './Jobs'
import Company from './Company'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Profile from './Profile'


function App() {
  return (
    <div className="App">
      <h1 className='title'>Jobly</h1>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route>
              <Home />
            </Route>
            <Route>
              <Companies exact path="/companies"/>
            </Route>
            <Route>
              <Company path="/companies/:handle"/>
            </Route>
            <Route>
              <Jobs exact path="/jobs"/>
            </Route>
            <Route>
              <LoginForm exact path="/login"/>
            </Route>
            <Route>
              <SignupForm exact path="/signup"/>
            </Route>
            <Route>
              <Profile exact path="/profile"/>
            </Route>
            <Redirect path="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
