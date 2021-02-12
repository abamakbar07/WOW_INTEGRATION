import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup(props) {
  
  return (

      <div className="card-body">
        <div className="container p-2">
          <Form>
            
            <h2 className="mb-3 text-left font-weight-bold">Sign Up</h2>

            <Form.Group>
              <Form.Control className="bgTextbox" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
              <Form.Control className="bgTextbox" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicFullName">
              <Form.Control className="bgTextbox" type="FullName" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="submit-button">
              <Link to="/" onClick={props.rtn} >
                <Button className="mt-2" variant="danger" type="submit">
                  Sign Up
                </Button>
              </Link>
            </Form.Group>

            <Form.Text className="text-muted">
              Already have an account? Klik <a className="font-weight-bold text-dark" onClick={props.valSi} href="/#">Here</a>
            </Form.Text>            

          </Form>
        </div>
      </div>

   )
}

export default Signup
