import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bio from "../components/Bio/Bio";
import UserPostings from "../components/UserPostings/UserPostings";

const Profile = () => {
    const [userId, setUserId] = useState ('617b2963e24f185f80a76ca7');

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