import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login(props) {

  return (

      <div className="card-body">
        <div className="container p-2">
          <Form>
            
            <h2 className="mb-3 text-left font-weight-bold">Sign In</h2>

            <Form.Group>
              <Form.Control className="bgTextbox" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
              <Form.Control className="bgTextbox" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="submit-button">
              <Link to="/Dashboard">
                <Button className="mt-2" variant="danger" type="submit">
                  Sign In
                </Button>
              </Link>
            </Form.Group>

            <Form.Text className="text-muted">
              Don't have an account? Klik <a className="font-weight-bold text-dark" onClick={props.valSu} href="/#" >Here</a>
            </Form.Text>            

          </Form>
        </div>
      </div>

   )
}

export default Login
