import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ConsolePage } from './pages/ConsolePage';
import { DemoSimulatorPage } from './pages/DemoSimulatorPage';
import { ScorecardsPage } from './pages/ScorecardsPage';
import { ScenarioBuilderPage } from './pages/ScenarioBuilderPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { Profile } from './pages/Profile';
import { Messages } from './pages/Messages';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';
import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/console" element={<PrivateRoute><ConsolePage /></PrivateRoute>} />
          <Route path="/demo-simulator" element={<PrivateRoute><DemoSimulatorPage /></PrivateRoute>} />
          <Route path="/scorecards" element={<PrivateRoute><ScorecardsPage /></PrivateRoute>} />
          <Route path="/scenario-builder" element={<PrivateRoute><ScenarioBuilderPage /></PrivateRoute>} />
          <Route path="/analytics" element={<PrivateRoute><AnalyticsPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Example home page
const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = document.cookie.includes('authToken'); // Simplified check

    // Redirect to login if not authenticated
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to the Realtime Console App</h2>
      <p>Select a page from the sidebar to get started.</p>
    </div>
  );
};

// A simple PrivateRoute component to protect routes
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = document.cookie.includes('authToken'); // Simplified token check
  return token ? <>{children}</> : <Login />;
};

export default App;