import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContext } from './context/globalContext'

import './App.css';

import PrivateRoute from './comp/PrivateRoute'
import GlobalRoute from './comp/GlobalRoute'
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin';

const App = () => {
  const [state] = useContext(AppContext);

  return (
    <Router>
      <div className="App">
        {state.isLogin && state.isLogin}
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <PrivateRoute path="/Dashboard" exact component={Dashboard} />
          <GlobalRoute path="/Admin" exact component={Admin} />

        </Switch>

        {/* {state.isAdmin}
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <GlobalRoute path="/Dashboard" exact component={Dashboard} />
          <GlobalRoute path="/Admin" exact component={Admin} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
