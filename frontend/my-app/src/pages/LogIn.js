import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/LOGO.png"


const LogIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/login', loginData);
      const { token } = response.data;
      if (response.data.user) {
        setErrorMessages([]);
        sessionStorage.setItem("LogIn", true)
        navigate("/Home");
      }

      // Handle successful login, e.g., store the token in localStorage, redirect, etc.
      console.log('Login successful. Token:', token);
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.response?.data?.message || 'Unknown error');
      setErrorMessages([error.response?.data?.message || 'Unknown error']);
    }
  };
  
  return (
    <div className='signup-wrapper'>
      <div className="signup-header">
        <Link to="/Home"><img src={logo} alt="LOGO" /></Link>
        <div>
          <Link to="/LogIn"><button className='signup-header-buttons'>LOG IN</button></Link>
          <Link to="/SignUp"><button className='signup-header-buttons'>SIGN UP</button></Link>
        </div>
      </div>
      <div className="signup-body">
        <h1>Log In</h1>

        <form className='signup-form' onSubmit={handleLogin}>
          <label>Email</label>
          <input type="text" name="email" value={loginData.email} onChange={handleInputChange} required />
          <label>Password</label>
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} required />
          <button type="submit" >LOG IN</button>
        </form>
        {/* Display error messages */}
        {errorMessages.length > 0 && (
          <div className="error-messages">
            {errorMessages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}
      </div>
      <div className="signup-footer">Copyrights 2023 Funny Factory</div>
    </div>
  );
}

export default LogIn;