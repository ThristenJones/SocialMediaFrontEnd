import { Link } from "react-router-dom";
import {
    Navbar, Container, Button
} from 'react-bootstrap'
require('./Navbar.css')

function NavBar() {

    return(
        <nav>
            <Navbar bg="dark">
                    <Container>
             
                    <Navbar.Brand href="#home">
                        <img
                        src="https://i.ibb.co/82D1fnX/Toonie-Face-Logo.png"                        
                        width="150"
                        // height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <ul>
                        <Link to = '/'>
                            <Button variant="light">
                            <li> Home </li>
                            </Button>{' '}
                        </Link>
                        <Link to = '/bulletin'>
                            <Button variant="light">
                            <li> Bulletin </li>
                            </Button>{' '}
                        </Link>
                        <Link to = '/friendslist'>
                            <Button variant="light">
                            <li>Friends List</li>
                            </Button>{' '}
                        </Link>
                        <Link to = '/faq'>
                            <Button variant="light">
                            <li> FAQ </li>
                            </Button>{' '}
                        </Link>
                        <Link to = '/profile'>
                            <Button variant="light">
                            <li> Profile </li>
                            </Button>{' '}
                        </Link>
                        <Link to = '/signup'>
                            <Button variant="light">
                            <li> Sign Up </li>
                            </Button>{' '}
                        </Link>
                
                    </ul>
                    </Container>
                    </Navbar>
           
        </nav>
    );
}

export default NavBar;