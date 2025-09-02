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
    return Boolean(localStorage.getItem("authToken"));
  });

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    alert(email)
    alert(password)
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

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
