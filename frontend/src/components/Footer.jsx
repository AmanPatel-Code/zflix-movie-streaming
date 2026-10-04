import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Animated Background */}
      <div className="footer-glow glow-one"></div>
      <div className="footer-glow glow-two"></div>

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ZFLIX
          </Link>

          <p>
            Your ultimate destination for movies, series and unlimited
            entertainment. Sit back, relax and enjoy the show.
          </p>

          <div className="social-links">
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">◎</a>
            <a href="#" className="social-icon">▶</a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>

          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/series">TV Shows</Link>
          <Link to="/my-list">My List</Link>
        </div>

        {/* Genres */}
        <div className="footer-column">
          <h3>Genres</h3>

          <Link to="/genre/Action">Action</Link>
          <Link to="/genre/Comedy">Comedy</Link>
          <Link to="/genre/Horror">Horror</Link>
          <Link to="/genre/Romance">Romance</Link>
          <Link to="/genre/Thriller">Thriller</Link>
          <Link to="/genre/Sci-Fi">Sci-Fi</Link>
        </div>

        {/* Account */}
        <div className="footer-column">
          <h3>Account</h3>

          <Link to="/profile">My Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Create Account</Link>
        </div>

      </div>

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div>
          <h2>Never miss a movie 🎬</h2>
          <p>
            Subscribe and get updates about new movies and shows.
          </p>
        </div>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
          />
          <button>
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>ZFLIX</span>. All rights reserved.
        </p>

        <div>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;