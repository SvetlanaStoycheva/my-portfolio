import React from 'react';
import { links } from '../utils/links';
import { Link } from 'react-router-dom';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';

const openSidebar = () => {};

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-header'>
        <div className='logo'>
          <Link to='/'>
            <span className='left-arrow'>
              <BiCaretUp />
            </span>
            <span className='right-arrow'>
              <BiCaretDown />
            </span>
          </Link>
        </div>
        <button type='button' className='nav-toggle' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <div className='links'>
        <ul>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
