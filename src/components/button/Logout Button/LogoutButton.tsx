import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    navigate('/login'); // Redirect to the login page after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;