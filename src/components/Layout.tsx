import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.scss'; // Custom styles for the layout

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;