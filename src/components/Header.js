import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div id="header-listing">
        <div className="logo-listing-sec">
          <div className="logo-listing-circle-listing">
            <Link to="/">
              <div className="logo-listing">e!</div>
            </Link>
          </div>
        </div>

        <div className="login-listing-acc">
          <div id="login-listing">
            <a href="#">login</a>
          </div>
          <div id="create-account-listing">
            <button id="acc-btn-listing">Create an account</button>
          </div>
        </div>
      </div>
    );
}


export default Header;