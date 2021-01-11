import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import { App, AppHeader, AppLink} from './style';
export default function SignUp() {
  return (
    <App>
      <AppHeader>
        <div class="container w-auto p-5 bg-dark rounded shadow-lg" >
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control placeholder="Username" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control  placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Control placeholder="Address" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <button type="submit" class="btn btn-primary btn-lg w-100">Submit</button>
          </Form.Group>
        </Form>
        <h6>Already have an Account ?
          <AppLink href="/log-in"> Log In</AppLink>
        </h6>
        </div>
     
      </AppHeader>
    </App>
  )
}