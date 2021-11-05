import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar, Container, Button
} from 'react-bootstrap'
require('./Navbar.css')

const NavBar = ({user}) => {

    return(          
            <nav>
                <Navbar  bg="dark">
                    <Container >
                        <Navbar.Brand href="#home">
                            <img
                            src="https://i.ibb.co/82D1fnX/Toonie-Face-Logo.png"                        
                            width="150"
                            // height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <div>
                        {user && <h4>Welcome {user.name}</h4>}
                            <ul>
                            <Link to = '/profile'>
                                    <Button variant="light">
                                    <li> Profile </li>
                                    </Button>{' '}
                                </Link>
                                
                                {!user &&
                                    <React.Fragment>
                                        <li>
                                        <Link to = '/'>
                                            <Button variant="light">
                                            <li> Login </li>
                                            </Button>{' '}
                                        </Link>
                                        </li>                                    
                                        <Link to = '/signup'>
                                            <Button variant="light">
                                            <li> Sign Up </li>
                                            </Button>{' '}
                                        </Link>
                                    </React.Fragment>
                                }                           
                                </ul>
                            </div>
                    </Container>
                </Navbar>    
            </nav>
    );
}

export default NavBar;