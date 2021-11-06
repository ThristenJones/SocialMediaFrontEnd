import {
    Card, ListGroup, ListGroupItem, Button
} from 'react-bootstrap'
import ProfilePic from '../ProfilePic/ProfilePic';

function Bio() {

    const handleClick = id =>  {
        const jwt = localStorage.removeItem('token');
    }

    return(
        <Card style={{ width: '18rem' }}>
            <ProfilePic />
            <Card.Body>
    {/*********** PROFILE NAME LOGIC GOES HERE ***********/}
                <Card.Title>Profile Name</Card.Title>
                <Card.Title>Bio:</Card.Title>
    {/*********** BIO LOGIC GOES HERE ***********/}
                <Card.Text>
                Octavio is essentially a Hispanic version of Dale. It is heavily implied that Octavio's interest in mercenary and conspiracy activities is almost entirely a juvenile fantasy and he has no actual access to the criminal underworld or experience with serious violence, exactly like Dale's life. However, Octavio and his two brothers (or two men posing as his brothers) do successfully engage in a brawl with Bill's terrible roommates in Bill Gathers Moss.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Age:</ListGroupItem>
                <ListGroupItem>City:</ListGroupItem>
    {/*********** LOG OUT LOGIC GOES HERE ***********/}
                <Button onClick = {handleClick}>Log Out</Button>
            </ListGroup>
        </Card>
        
    );
}

export default Bio;