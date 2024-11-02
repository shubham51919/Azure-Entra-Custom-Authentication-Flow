import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CombinedProvider } from './contexts/index.jsx';
import { MsalProvider } from '@azure/msal-react';
import { CustomNavigationClient } from './NavigationClient.js';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from './login.jsx';
import Home from './Home.jsx';
import './App.css';

function App({ pca }) {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <CombinedProvider>
        <Pages />
      </CombinedProvider>
    </MsalProvider>
  );
}

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;