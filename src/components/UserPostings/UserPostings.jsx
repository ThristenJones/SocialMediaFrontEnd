import {
    Card, Button
} from 'react-bootstrap'


function UserPostings() {

    return(
        <Card>
    {/******* LOGIC FOR THE USER WHO MADE POST ******/}
        <Card.Header as="h5">User Name</Card.Header>
        <Card.Body>
    {/****** LOGIC FOR USERS POST ******/}
            <Card.Title>Post Subject</Card.Title>
            <Card.Text>
            "Cash rules everything around me C.R.E.A.M., get the money Dollar dollar bill, y'all Cash rules everything around me C.R.E.A.M., get the money Dollar dollar bill, y'all" -WuTang Clan.           </Card.Text>
            <Button variant="danger">Delete Post</Button>
        </Card.Body>
        </Card>
    );
}

export default UserPostings;