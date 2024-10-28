import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by making an API call
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/check-auth', {
          credentials: 'include', // Include cookies with the request
        });

        if (response.ok) {
          navigate('/console'); // Redirect to the dashboard if authenticated
        } else {
          navigate('/login'); // Redirect back to login if not authenticated
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        navigate('/login');
      }
    };

    checkAuthStatus();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default LoginSuccess;