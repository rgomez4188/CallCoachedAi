import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconUserCircle, IconInbox } from '@tabler/icons-react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-title">
      </div>
      <nav className="header-nav">
        <ul>
        <li>
            <NavLink to="/Messages" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconInbox size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconUserCircle size={24} />
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;