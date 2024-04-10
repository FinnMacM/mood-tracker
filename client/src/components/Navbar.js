import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/moodtracker">Mood Tracker</Link> {/* Link to the mood tracker route */}
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
