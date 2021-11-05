import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Login from "../WEB PAGES/Login";
import Profile from "../WEB PAGES/Profile";
import SignUp from "../WEB PAGES/SignUp";
import jwt_decode from "jwt-decode";



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
    <div>
      <NavBar user = {user} />
        <Switch>
          <Route path = '/profile' 
          render = {props => {
            if(!user){
              return <Redirect to="/" />;
            }else {
              return<Profile {...props} user = {user} />swich this around with if
            }
          }}
          />
            <Route path = '/' exact component = { Login } />
            <Route path = '/signup' component = { SignUp } />           
        </Switch>
   </div>
  )
}

export default App;
