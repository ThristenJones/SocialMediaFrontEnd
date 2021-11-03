import React from "react";
import { Form, Col, Row, Container} from 'react-bootstrap';

function SignUp() {
    return (
        <div>
        <div class="container">
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
    <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
    </div>
    <div class="col">
    </div>
  </div>
</div>
         </div>
      
    );
}


export default SignUp;