import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AdminPage from "./components/AdminPage";
import logo from "./assets/logo.PNG";
import "./App.css";

function App() {
  return (
    <Router basename="/natalias-nobel-nails">
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <img
                src={logo}
                alt="Natalia's Nobel Nails"
                className="logo-image"
              />
              <span>Natalia's Nobel Nails</span>
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <a href="#book" className="nav-link">
                Book Now
              </a>
              <Link to="/admin" className="nav-link admin-link">
                Admin
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
