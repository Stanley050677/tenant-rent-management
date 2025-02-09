import React from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import TenantDashboard from './components/Tenant/TenantDashboard';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/tenant">Tenant Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<h1>Welcome to Tenant Rent Management</h1>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/tenant" element={<TenantDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



