import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
    <nav>
      <ul>
        <li><Link to='/top'>Top</Link></li>
        <li><Link to='/new'>New</Link></li>
        <li><Link to='/show'>Show</Link></li>
        <li><Link to='/ask'>Ask</Link></li>
        <li><Link to='/jobs'>Jobs</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;