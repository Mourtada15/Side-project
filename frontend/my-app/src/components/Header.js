import { useEffect, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from "../assets/LOGO.png"

const Header = () => {
  const [loggedin, setLoggedIN] = useState();
  useEffect(() => {
    checkLogin()

  }, []);

  const checkLogin = () => {
    if (!window.sessionStorage.LogIn) {

      window.location.href = "/"

    }
    else {
      setLoggedIN(true);
    }
  }

  const logout = () => {
    sessionStorage.clear()

  }

  return (
    <div className="header">
      <Link to="/Home"><img src={logo} alt="LOGO" /></Link>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/CreateMeme">Create Meme</Link>
        {/* <Link to="/EditMeme/:id">Edit Meme</Link> */}
        <Link to="/" onClick={logout}>Logout </Link>
      </nav>
    </div>
  );
}

export default Header;