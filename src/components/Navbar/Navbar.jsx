import { Link } from "react-router-dom";

function Navbar() {

    return(
        <nav>
            <ul>
                <Link to = '/'>
                    <li>Home</li>
                </Link>
                <Link to = '/bulletin'>
                    <li>Bulletin</li>
                </Link>
                <Link to = '/friendslist'>
                    <li>Freinds List</li>
                </Link>
                <Link to = '/faq'>
                    <li>FAQ</li>
                </Link>
                <Link to = '/profile'>
                    <li>Profile</li>
                </Link>
                <Link to = '/signup'>
                    <li>Sign Up</li>
                </Link>
                
        //     </ul>
        // </nav>
    );
}

export default Navbar;