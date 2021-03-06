import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AppContext } from './context/globalContext'

import './App.css'

import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'

import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin'
import Profile from "./pages/Dashboard/Profile"
import BookDetail from "./pages/Dashboard/BookDetail"

import { API, setAuthToken } from "./config/api"


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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
      console.log(error)
    }
  };

  useEffect(() => {
    checkUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
      <Router>
        <div className="App">
          {/* {state.isLogin && state.isLogin} */}
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/dashboard/book-detail/:id" exact component={BookDetail} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <AdminRoute path="/admin" exact component={Admin} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
