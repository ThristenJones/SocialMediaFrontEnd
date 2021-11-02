import { Link } from "react-router-dom";

function Navbar() {

    return(
        
        <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
  <Link to = '/'>
            <li>Home</li>
    </Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
        // <nav>
        //     <ul>
        //         <Link to = '/'>
        //             <li>Home</li>
        //         </Link>
        //         <Link to = '/bulletin'>
        //             <li>Bulletin</li>
        //         </Link>
        //         <Link to = '/freindslist'>
        //             <li>Freinds List</li>
        //         </Link>
        //         <Link to = '/faq'>
        //             <li>FAQ</li>
        //         </Link>
        //         <Link to = '/profile'>
        //             <li>Profile</li>
        //         </Link>
        //         <Link to = '/signup'>
        //             <li>Sign Up</li>
        //         </Link>
                
        //     </ul>
        // </nav>
    );
}

export default Navbar;