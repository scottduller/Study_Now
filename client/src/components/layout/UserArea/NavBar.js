import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";

import "./NavBar.css";

// Navbar that contains all of the pages in the application
const NavBar = () => {
  const authContext = useContext(AuthContext);

  const { logout, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  // Components returns a side bar that contains links to all pages. can be enlarged or minimized. Top bar contains a logout button and a button to open and close sidebar
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Study Now
        </Link>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ width: "1rem" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-3">
              <Link to="/dashboard">
                <div>
                  <i className="fas fa-home mr-1" />
                  Home
                </div>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/calendar">
                <i className="fas fa-calendar-alt mr-1" />
                Calendar
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/todos">
                <i className="fas fa-check-square mr-1" />
                To-do Lists
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/pomodoro-timer">
                <i className="fas fa-stopwatch mr-1" />
                Pomodoro Timer
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/flashcards">
                <i className="fas fa-pencil-ruler mr-1" />
                Flashcards
              </Link>
            </li>
          </ul>
          <Link to="/">
            <button className="btn btn-danger" onClick={onLogout}>
              <i className="fas fa-sign-out-alt" />
            </button>
          </Link>
        </div>

        <div />
      </div>
    </nav>
  );
};

export default NavBar;
