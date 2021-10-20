import React from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <ul className='sidebar-links'>
        {links.map((item) => {
          return (
            <li key={item.id} className='sidebar-link'>
              <Link onClick={() => setIsSidebarOpen(false)} to={item.url}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
