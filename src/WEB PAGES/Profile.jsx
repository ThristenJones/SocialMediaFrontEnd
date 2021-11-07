import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bio from "../components/Bio/Bio";
import UserPostings from "../components/UserPostings/UserPostings";

const Profile = (props) => {
    const [user, setUser] = useState (props.user);
    const [userId, setUserId] = useState (props.user.id);
    const [like, setLike] = useState()

    return (
        <div>
            <Container>
            <Row>
                <Col><Bio user = {user}/></Col>
                <Col xs= {6} md= {8}><UserPostings user = {user} /></Col>
                <Col></Col>
    
            </Row>
            </Container>
            
            
        </div>
    );
}

export default Profile;