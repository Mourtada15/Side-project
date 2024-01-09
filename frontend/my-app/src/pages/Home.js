import './Home.css'
import { Link } from 'react-router-dom';
import logo from "../assets/LOGO.png"

const Home = () => {
  
  return (
    <div className="signup-wrapper">
      <div className="signup-header">
        <Link to="/Home"><img src={logo} alt="LOGO" /></Link>
        <div>
          <Link to="/LogIn"><button className='signup-header-buttons'>LOG IN</button></Link>
          <Link to="/SignUp"><button className='signup-header-buttons'>SIGN UP</button></Link>
        </div>
      </div>
      <img className="home-img" src="3.jpg" alt="" />
      <div className="signup-footer">Copyrights 2023 Funny Factory</div>
    </div>
  );
}

export default Home;