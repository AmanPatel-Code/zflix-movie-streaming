import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {

  const [profileOpen, setProfileOpen] = useState(false);
  const [moviesOpen, setMoviesOpen] = useState(false);

  return (
    <header className="header">

      {/* Logo */}

      <Link
        to="/"
        className="logo"
      >
        ZFLIX
      </Link>


      {/* Navigation */}

      <nav className="nav-menu">

        <Link to="/">
          Home
        </Link>


        {/* Movies Dropdown */}

        <div
          className="nav-dropdown"

          onMouseEnter={() =>
            setMoviesOpen(true)
          }

          onMouseLeave={() =>
            setMoviesOpen(false)
          }
        >

          <button className="nav-dropdown-btn">

            Movies

            <span
              className={
                moviesOpen
                  ? "arrow rotate"
                  : "arrow"
              }
            >
              ▼
            </span>

          </button>


          <div
            className={
              moviesOpen
                ? "movies-dropdown show"
                : "movies-dropdown"
            }
          >

            <Link to="/movies">
              All Movies
            </Link>

            <Link to="/genre/Action">
              Action
            </Link>

            <Link to="/genre/Comedy">
              Comedy
            </Link>

            <Link to="/genre/Horror">
              Horror
            </Link>

            <Link to="/genre/Romance">
              Romance
            </Link>

            <Link to="/genre/Thriller">
              Thriller
            </Link>

            <Link to="/genre/Sci-Fi">
              Sci-Fi
            </Link>

          </div>

        </div>


        <Link to="/series">
          TV Shows
        </Link>

        <Link to="/my-list">
          My List
        </Link>

      </nav>


      {/* Right Side */}

      <div className="header-right">


        {/* Search */}

        <div className="search-box">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search movies..."
          />

        </div>


        {/* Profile */}

        <div
          className="profile-container"

          onClick={() =>
            setProfileOpen(!profileOpen)
          }
        >

          <div className="profile">
            👤
          </div>

          <span
            className={
              profileOpen
                ? "profile-arrow rotate"
                : "profile-arrow"
            }
          >
            ▼
          </span>


          {/* Profile Dropdown */}

          <div
            className={
              profileOpen
                ? "profile-dropdown show"
                : "profile-dropdown"
            }
          >

            <div className="profile-info">

              <div className="profile-big">
                👤
              </div>

              <div>

                <h4>
                  Aman
                </h4>

                <span>
                  View Profile
                </span>

              </div>

            </div>


            <div className="dropdown-line" />


            <Link to="/profile">
              👤 My Profile
            </Link>

            <Link to="/my-list">
              ❤️ My List
            </Link>

            <Link to="/settings">
              ⚙️ Settings
            </Link>


            <div className="dropdown-line" />


            <button className="logout-btn">
              🚪 Logout
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;