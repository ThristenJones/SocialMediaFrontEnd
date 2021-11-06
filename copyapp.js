import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Login from "../WEB PAGES/Login";
import Profile from "../WEB PAGES/Profile";
import SignUp from "../WEB PAGES/SignUp";
import jwt_decode from "jwt-decode";
import Bulletin from './Bulletin/Bulletin';



function App() {
   
  const [user, setUser] = useState()
  const jwt = localStorage.getItem('token');
    useEffect(() => {
      console.log(jwt)
      try{
        const user = jwt_decode(jwt);
        setUser(user)
        console.log(user)
      }catch{
    }
  },[jwt])

  return (
    <Router> 
      <Switch>
        <Route path ="/profile">
          <Profile />
          </Route>
            <Route path = '/profile' render = {props => {
              if(user){
                return<Profile {...props} user = {user} />
              }else {
                return <Redirect to="/" />;
              }
            }}
            />
              <Route path = '/' exact component = { Login } />
              <Route path = '/signup' component = { SignUp } />
              <Route path = '/profile' component = { Profile } />            
        </Switch>
      </Router>
  )
}           


export default App;


// function App() {

//   // const onChange = (e) =>
//   //   setUser({... user, [e.target.name]: e.target.value});

//   const [user, setUser] = useState()
//   const jwt = localStorage.getItem('token');
//     useEffect(() => {
//       console.log(jwt)
//       try{
//         const user = jwt_decode(jwt);
//         setUser(user)
//         console.log(user)
//       }catch{
//     }
//   },[jwt])

//   return (
//     <Router> 
//       <Switch>
//         {/* <NavBar user = {user} /> */}
//           <Route path ="/profile">
//             <Profile />
//           </Route>hjhn

          
//             <Route path = '/profile' render = {props => {
//               if(user){
//                 return<Profile {...props} user = {user} />
//               }else {
//                 return <Redirect to="/" />;
//               }
//             }}
//             />
//               <Route path = '/' exact component = { Login } />
//               <Route path = '/signup' component = { SignUp } />
//               <Route path = '/profile' component = { Profile } />            
//         </Switch>
//       </Router>
//   )
// }

{/* <Router>
<Switch>
  <Route exact path = "/">
    <Bulletin />
  </Route>
  <Route path = "/login">
    <Login />
  </Route>
  <Route path = "/signup">
    <SignUp />
  </Route>
  <Route path = "/profile/:username">
    <Profile />
  </Route>
</Switch>
</Router>
)
}  */}