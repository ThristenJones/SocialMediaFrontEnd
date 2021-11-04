import React, {useState, useEffect} from "react";
import axios from "axios";
import { Form, Button, Image, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
      
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        const user={
            email: email,
            password: password
           }
           axios.post(`http://localhost:5000/api/auth/`, user)
           .then(response => localStorage.setItem('token', response.data))
        };  

    return (
        <div>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Image src="https://i.ibb.co/tbcKqwy/Toonie-Face-Header.png"
                width= "4000"
                fluid />
              </Col>
              <Col></Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form onSubmit ={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
              </Form>
              </Col>
              <Col></Col>
              </Row>
        </Container>
        </div>
    );
}

export default Login;