import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>JSON Place Holder</h2>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/posts'>Post</NavLink>
          </li>
          <li>
            <NavLink to='/comments'>Comments</NavLink>
          </li>
          <li>
            <NavLink to='/albums'>Albums</NavLink>
          </li>
          <li>
            <NavLink to='/photos'>Photos</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
