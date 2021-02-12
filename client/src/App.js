import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContext } from './context/globalContext'

import './App.css';

import PrivateRoute from './components/PrivateRoute'
import GlobalRoute from './components/GlobalRoute'
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin';

import { QueryClientProvider, QueryClient } from "react-query";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const queryClient = new QueryClient();

const App = () => {
  const [state, dispatch] = useContext(AppContext);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 401) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      dispatch({
        type: "USER_LOADED",
        payload: response.data.data.user,
      });
    } catch (error) {
      return dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
