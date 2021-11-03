import React from "react";
<<<<<<< HEAD
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
=======
import { Form, Button, Image, Container, Row, Col } from 'react-bootstrap';
>>>>>>> b7de8b76d2e8bc2b253f543a4507dc6c917bdcbd

function Home() {
    return (
        <div>
<<<<<<< HEAD
        <Container fluid="md">
  <Row>
    <Col>          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Col>
  </Row>
</Container>
       
  
=======
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
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
>>>>>>> b7de8b76d2e8bc2b253f543a4507dc6c917bdcbd
        </div>
    );
}

export default Home;