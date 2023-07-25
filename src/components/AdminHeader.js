import React from 'react'
import '../css/Adminheader.css';


const AdminHeader = () => {
  return (
    <div className='row top_header2'>
      <header>
        <nav className='navbar navbar-expand-md'>
            <div style={{textAlign : 'left', height : '50px', width : '110%',paddingLeft: '30px'}}>
            
            <h1>  AC REPAIR :  SERVICE PROVIDER(ADMIN'S)  DESK</h1>
            </div>
            <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
            <h3> Home</h3>
        </div>
      </div>
      <div className='col-1 col-md-1 col-xl-1 col-lg-1'>
        <div className="container-Project-item" >
        <h3><a className="menu-item" href="/">Logout</a></h3>
        </div>
      </div>
      
        </nav>
      </header>
    </div>
  )
}

export default AdminHeader
