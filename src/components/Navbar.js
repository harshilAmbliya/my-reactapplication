import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  return (
   
    <>
      
      <nav
        className='navbar navbar-expand-lg '
        
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'rgb(10 4 65)',
          color: props.mode === 'light' ? 'black' : 'white'
        }}>

        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: props.mode === "light" ? 'black' : 'white' }} to="/textutils">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " style={{ color: props.mode === "light" ? 'black' : 'white' }} aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: props.mode === "light" ? 'black' : 'white' }}>
                  {props.aboutText}
                </Link>
              </li>

            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <div
              className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'
                }`}
            >
              <input
                className="form-check-input"
                onClick={props.changemode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable darkMode
              </label>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

// Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string }
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About us',
}
