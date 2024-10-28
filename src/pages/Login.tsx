import React from 'react';

const Login: React.FC = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:4000/auth/signin';
      };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <p>Please login to access the app.</p>
      <button onClick={handleLogin} className="login-button">
        Login with Google
      </button>
    </div>
  );
};

export default Login;