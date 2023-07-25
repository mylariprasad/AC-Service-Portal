import React from 'react'
import '../css/topheader.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const HeaderComponent = () => {
  return (
    <div className='container-fluid fixed-top top_header'>
      <header>
        <nav className='navbar navbar-expand-md'>
            <div style={{textAlign : 'center', height : '50px', width : '110%'}}>
            <Sidebar/>
            <h1> AC REPAIR PORTAL</h1>
            </div>
            <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
        <Link className="menu-item" to={`/AboutUs`}>
        <buton type="button" className="btn btn-primary">About Us</buton>
      </Link>   
        </div>
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
            <h3> Contact</h3>
        </div>
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1' >
      <button type="button" className="btn btn-primary" href='/'>
                  Login</button>
      </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
