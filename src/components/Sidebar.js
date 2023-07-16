import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
export default props => {
  return (
    <Menu>
    <h3>Login as</h3>
    <Link className="menu-item" to={`/Customer_bking_rendered`}>
        Customer
      </Link>

      <a className="menu-item" href="/">
        Employee
      </a>

      <Link className="menu-item" to={`/admin`}>
        Service provider(Admin)
      </Link>
      
     
    </Menu>
  );
};