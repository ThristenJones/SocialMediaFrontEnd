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
import LandingScreen from '../WEB PAGES/LandingScreen';



function App() {

  const [user, setUser] = useState()
  const jwt = localStorage.getItem('token');
    useEffect(() => {
      try{
        const user = jwt_decode(jwt);
        setUser(user)
        console.log(user.name)
      }catch{
    }
  },[jwt])

  return (
    <div>
      <NavBar user ={user} />
        <Switch>
          <Route path = '/profile' 
          render = {(props) => {
            if(!user){
              return <Redirect to = "/login" />;
            }else {
              return<Profile {...props} user ={user} />
            }
          }}
          />
            <Route path = '/' exact component = { LandingScreen } />
            <Route path = '/signup' component = { SignUp } /> 
            <Route path = '/login' component = {Login} />         
        </Switch>
   </div>
  )
}

export default App;
