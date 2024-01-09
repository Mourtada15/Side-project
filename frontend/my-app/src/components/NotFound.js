import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">
        Oops! Looks like you've stumbled upon a page that doesn't exist.
      </p>
      <Link to="/Home">
      <button className="not-found-button">
        Go back to Home
      </button>
      </Link>
    </div>
  );
}

export default NotFound;