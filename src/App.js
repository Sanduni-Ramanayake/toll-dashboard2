import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    // Check for token in localStorage
    return Boolean(localStorage.getItem("authToken"));
  });

  // Mock login handler: accepts any credentials and sets a fake JWT token
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    // Generate a mock JWT token (for demo purposes only)
    const mockToken = btoa(`${email}:${password}:${Date.now()}`);
    localStorage.setItem("authToken", mockToken);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Lazy import to avoid circular dependency if needed
  const Transactions = require("./pages/Transactions").default;
  const GateDashboard = require("./pages/GateDashboard").default;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
        <Route
          path="/vehicles"
          element={<Vehicles onLogout={handleLogout} />}
        />
        <Route
          path="/transactions"
          element={<Transactions onLogout={handleLogout} />}
        />
        <Route
          path="/gates"
          element={<GateDashboard onLogout={handleLogout} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
