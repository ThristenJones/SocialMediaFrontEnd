import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bio from "../components/Bio/Bio";
import UserPostings from "../components/UserPostings/UserPostings";

function Profile() {
    return (
        <div>
            <Container>
            <Row>
                <Col><Bio /></Col>
                <Col xs= {6} md= {8}><UserPostings/></Col>
                <Col></Col>
    
            </Row>
            </Container>
            
            
        </div>
    );
}

export default Profile;