import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
      
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit =(event, props)=>{
        event.preventDefault();
        const user={
            email: email,
            password: password
           }
           axios.get(`http://localhost:5000/api/auth`, user)
           .then(response => setEmail(response.user.email))
        }, [props.email]);  

   return(
    <div>
    <form onSubmit ={handleSubmit}>
       <input style={{width: '40%', height: '40px', borderRadius: '5px'}}name="email" placeholder="email"onChange={handleEmailChange}></input>
       <input style={{width: '40%', height: '40px', borderRadius: '5px'}}name="password" placeholder="password"onChange={handlePasswordChange}></input>
       <button type = "submit" className="btn btn-dark">Add Reply</button>
    </form>  

    </div>
   )
}

export default Login