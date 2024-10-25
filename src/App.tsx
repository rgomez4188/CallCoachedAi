import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ConsolePage } from './pages/ConsolePage';
import { DemoSimulatorPage } from './pages/DemoSimulatorPage';
import { ScorecardsPage } from './pages/ScorecardsPage';
import { ScenarioBuilderPage } from './pages/ScenarioBuilderPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { Profile } from './pages/Profile';
import { Messages } from './pages/Messages';
import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/console" element={<ConsolePage />} />
          <Route path="/demo-simulator" element={<DemoSimulatorPage />} />
          <Route path="/scorecards" element={<ScorecardsPage />} />
          <Route path="/scenario-builder" element={<ScenarioBuilderPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/" element={
            <div>
              <h2>Welcome to the Realtime Console App</h2>
              <p>Select a page from the sidebar to get started.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;