import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App, AppHeader, AppLink} from './style';
export default function LogIn() {
  return (
    <App>
      <AppHeader>
        <div class="container w-auto p-5 bg-dark rounded shadow-lg" >
        <Form>
          <Form.Group>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>

          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <button type="submit" class="btn btn-primary btn-lg w-100">Log In</button>
          </Form.Group>

        </Form>
        <h6>Don't have an Account ?
          <AppLink href="/sign-up"> Sign Up</AppLink>
        </h6>
          
        </div>
     
      </AppHeader>
    </App>
  )
}