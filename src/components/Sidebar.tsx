import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconHome,
  IconHeadset,
  IconVideo,
  IconCards,
  IconTemplate,
  IconGraph,
  IconSettings
} from '@tabler/icons-react';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconHome size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/console" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconHeadset size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/demo-simulator" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconVideo size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/scorecards" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconCards size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/scenario-builder" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconTemplate size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
              <IconGraph size={24} />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-settings">
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
          <IconSettings size={24} />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;