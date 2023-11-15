import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getToken, removeToken } from "../../services/LocalStorageService";

export default function Navbar() {


// const searchitem = () => {
// const searchField = document.getElementById("search-feild");
// const value = searchField.value;
// }


  const [auth, setAuth] = useState(null);
  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const value = getToken();
    if (value) {
      // console.log(value)
      setAuth(value);
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const logoutclick = () => {
    console.log("log out clicked");
    removeToken();
    setAuth(null);
    const { access } = getToken();

    // Assuming removeToken() removes authentication tokens
    console.log(access);
    // Update the authentication state to reflect the user's logged-out status
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            
            

            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               
              account
              </a>
              <ul className="dropdown-menu">
              <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
           
            {auth ? (
              <li className="nav-item">
                <Link onClick={logoutclick} className="nav-link" to="/">
                  logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>
            )}

            {auth ? (
               <li className="nav-item">
               <Link className="nav-link" to="/change-password">
                 changepassword
               </Link>
             </li>
            
            ) : (
              null
            )}

              </ul>



            </li>
          </ul>
          <form   className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              
              name="search-feild"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
