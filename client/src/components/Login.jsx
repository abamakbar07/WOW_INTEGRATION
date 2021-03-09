import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from "../context/globalContext";
import { useHistory } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { API, setAuthToken } from "../config/api";


const Login = (props) => {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (!state.loading && state.isLogin) history.push("/Dashboard");
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const onChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify({
        email,
        password,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = await API.post("/login", body, config);
      const userResult = user.data.data.user

      if (userResult.isAdmin) {
        dispatch({
          type: "LOGIN_ADMIN",
          payload: userResult
        })
        setAuthToken(userResult.token)
        history.push("/admin")
      } else {
        dispatch({
          type: "LOGIN_USER",
          payload: userResult
        })
        setAuthToken(userResult.token)
        history.push("/dashboard")
      }

      setAuthToken(userResult.token);

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="card-body">
      <div className="container p-2">
        <Form onSubmit={(e) => onSubmit(e)}>
          <h2 className="mb-3 text-left font-weight-bold">Login</h2>

          <Form.Group>
            <Form.Control
              className="bgTextbox mb-3"
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => onChange(e)}
            />

            <Form.Control
              className="bgTextbox mb-3"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => onChange(e)}
            />

            <Button
              className="mt-2 submit-button"
              variant="danger"
              type="submit"
              style={{ width: "-webkit-fill-available" }}
            >
              Sign In
            </Button>
          </Form.Group>

          <Form.Text className="text-muted">
            Don't have an account? Klik{" "}
            <a
              className="font-weight-bold text-dark"
              onClick={props.valSu}
              href="/#"
            >
              Here
            </a>
            {/* Don't have an account? Klik <a className="font-weight-bold text-dark" href="/#" >Here</a> */}
          </Form.Text>
        </Form>
      </div>
    </div>
  );
}

export default Login
