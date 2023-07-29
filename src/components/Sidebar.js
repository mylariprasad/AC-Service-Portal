import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
export default props => {
  return (
    <Menu>
    <h3>Login as</h3>
    <Link className="menu-item" to={`/login`}>
        Customer
      </Link>

<<<<<<< Updated upstream
     
=======
      <Link className="menu-item" to="/employee-repairs">
        Employee
      </Link>
>>>>>>> Stashed changes

      <Link className="menu-item" to={`/Admin_login`}>
        Service provider(Admin)
      </Link>
      
     
    </Menu>
  );
};