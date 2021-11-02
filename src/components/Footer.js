import React from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-links-container'>
        <div className='footer-logo'>
          <Link to='/'>
            <span className='left-arrow footer-arrow'>
              <BiCaretUp />
            </span>
            <span className='right-arrow footer-arrow'>
              <BiCaretDown />
            </span>
          </Link>
        </div>
        <div className='footer-links sidebar-links'>
          <ul>
            {links.map((item) => {
              return (
                <li key={item.id} className='footer-link sidebar-link'>
                  <Link to={item.url}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='footer-social-links-container'>
        <ul>
          <li className='social-link'>
            <a
              href='https://github.com/SvetlanaStoycheva'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaGithub />
            </a>
          </li>
          <li className='social-link'>
            <a
              href='https://www.frontendmentor.io/profile/SvetlanaStoycheva/solutions'
              target='_blank'
              rel='noreferrer noopener'
            >
              <SiFrontendmentor />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
