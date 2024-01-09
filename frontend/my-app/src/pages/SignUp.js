import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/LOGO.png"

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Select Role', // Default role
  });
  // const [isPending, setIsPending] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setIsPending(true);

    try {
      const response = await axios.post('http://localhost:4000/auth/register', signUp);
      console.log(response.data);
      setSuccessMessage('User created successfully!');
      setErrorMessages([]);

      setSignUp({
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Select Role', // Assuming 'Regular' is the default role
      });
      // setIsPending(false);
      setTimeout(() => {
        navigate('/LogIn');
      }, 2000);
    } catch (error) {
      console.error(error.response.data);
      setErrorMessages([error.response.data.message]);
      setSuccessMessage('');
      // setIsPending(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-header">
        <Link to="/Home"><img src={logo} alt="LOGO" /></Link>
        <div>
          <Link to="/LogIn"><button className='signup-header-buttons'>LOG IN</button></Link>
          <Link to="/SignUp"><button className='signup-header-buttons'>SIGN UP</button></Link>
        </div>
      </div>
      <div className="signup-body">
        <h1>Sign Up</h1>
        <form className='signup-form' onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={signUp.email} onChange={handleInputChange} required />
          <label>Role</label>
          <select name="role" value={signUp.role} onChange={handleInputChange} >
            <option value="" >Select Role</option>
            <option value="Regular" >Regular</option>
            <option value="Creator" >Creator</option>
          </select>
          <label>Password</label>
          <input type="password" name="password" value={signUp.password} onChange={handleInputChange} required />
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={signUp.confirmPassword} onChange={handleInputChange} required />
          <button type="submit" >SIGN UP</button>
          {/* {!isPending && <button type="submit" >SIGN UP</button>} */}
          {/* {isPending && <button disabled>Creating user...</button>} */}
        </form>
        {/* Display success message */}
        {successMessage && (
          <div className="success-message">
            <p>{successMessage}</p>
          </div>
        )}

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

export default SignUp;