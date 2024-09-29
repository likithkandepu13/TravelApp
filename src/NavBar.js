import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <h3 className='logo'>Travel App</h3>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/homestay" className="navbar-link">Hotels & HomeStays</Link>
          </li>
          <li className='navbar-item'>
          <Link to="/homestay" className="navbar-link">Tourist Attractions</Link>
          </li>
          <li className='navbar-link'>
          Login / Register
          </li>
          {/* <div className=''>
          <li className='navbar-item'>
          <Link to="/homestay" className="navbar-link">User login/register</Link>
          </li>
          <li className='navbar-item'>
          <Link to="/homestay" className="navbar-link">Extranet partner login</Link>
          </li>
          <li className='navbar-item'>
          <Link to="/homestay" className="navbar-link">Admin Login</Link>
          </li>
          </div> */}
          <li className='navbar-item'>
          <Link to="/homestay" className="navbar-link">Travel Packages</Link>
          </li>
      </ul>
    </nav>
  );
}
