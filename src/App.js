import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Injection from './pages/Injection';
import Surrender from './pages/Surrender';
import Impound from './pages/Impound';
import Request from './pages/Request';
import Report from './pages/Report';
import LogBook from './pages/LogBook';
import pawprintsLogo from './assets/paw-navbar.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-links-left">
            <ul className="navbar-list">
              <li><Link to="/">PawPrints</Link></li>
              <img src={pawprintsLogo} alt="PawPrints Logo" className="logo" />
            </ul>
          </div>
          <div className="navbar-links-right">
            <ul className="navbar-list">
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/injection">Injection</Link></li>
              <li><Link to="/surrender">Surrender</Link></li>
              <li><Link to="/impound">Impound</Link></li>
              <li><Link to="/request">Request</Link></li>
              <li><Link to="/report">Report</Link></li>
              <li><Link to="/logbook">Log Book</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/injection" element={<Injection />} />
          <Route path="/surrender" element={<Surrender />} />
          <Route path="/impound" element={<Impound />} />
          <Route path="/request" element={<Request />} />
          <Route path="/report" element={<Report />} />
          <Route path="/logbook" element={<LogBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
