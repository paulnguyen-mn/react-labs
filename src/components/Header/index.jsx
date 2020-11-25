import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
  return (
    <div className="header">
      <ul className="header__menu">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/box">Box</NavLink>
        </li>

        <li>
          <NavLink to="/rendering">Rendering</NavLink>
        </li>

        <li>
          <a href="https://zingmp3.vn/" target="_blank" rel="noopener noreferrer">
            Go to Zing MP3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
