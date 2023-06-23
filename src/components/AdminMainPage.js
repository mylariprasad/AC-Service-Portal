import React from 'react';
import { Link } from 'react-router-dom';

const AdminMainPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
          <button style={{width: '400px',height: '150px',backgroundColor: '#CEACE6',color: 'black',borderRadius: '5px',margin: '35px',fontWeight: 'bold'}}><Link to={`/customers`} >Customer Management</Link></button>
          <button style={{width: '400px',height: '150px',backgroundColor: '#CEACE6',color: 'black',borderRadius: '5px',margin: '35px',fontWeight: 'bold'}}>Device Management</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
          <button style={{width: '400px',height: '150px',backgroundColor: '#CEACE6',color: 'black',borderRadius: '5px',margin: '35px',fontWeight: 'bold'}}><Link to={`/employees`} >Employee Management</Link></button>
          <button style={{width: '400px',height: '150px',backgroundColor: '#CEACE6',color: 'black',borderRadius: '5px',margin: '35px',fontWeight: 'bold'}}><Link component={Link} to={`/repairs`}>Repair Management</Link></button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
          <button style={{width: '400px',height: '150px',backgroundColor: '#CEACE6',color: 'black',borderRadius: '5px',margin: '35px',fontWeight: 'bold'}}>Customer Booking Data</button>
          <button style={{width: '400px',height: '150px',backgroundColor: '#CEACE6',color: 'black',borderRadius: '5px',margin: '35px',fontWeight: 'bold'}}>Employee's Assigned</button>
        </div>
      </div>
    </div>
  );
};


    
  


// const Component1 = () => {
//   return <div>Customer Management</div>;
// };

// const Component2 = () => {
//   return <div>Device Management</div>;
// };

// const Component3 = () => {
//   return <div>Employee Management</div>;
// };

// const Component4 = () => {
//   return <div>Repair Management</div>;
// };

// const Component5 = () => {
//   return <div>Customer Booking Data</div>;
// };

// const Component6 = () => {
//   return <div>Employee's Assigned</div>;
// };

export default AdminMainPage;
