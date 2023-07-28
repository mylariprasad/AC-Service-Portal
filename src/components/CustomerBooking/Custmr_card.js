import React, { useState, useEffect } from 'react';
import img from './profile.png';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../../css/Custmr_card.css'
import MenuContent from './MenuContent'


function Custmr_card() {
  const { id } = useParams();
  const [customerName, setCustomerName] = useState('');
  const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    if (id) {
      fetchCustomerData(id);
    }
  }, [id]);

  const fetchCustomerData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/customers/${id}`);
      setCustomerName(response.data.name);
      setCustomerId(response.data.id);
    } catch (error) {
      console.error('Error fetching customer:', error);
    }
  };

  return (
    <div className="main-container" style={{width:"100vw", marginTop:"0px"}}>
    <div className="card1" style={{ width: '20%', height: '95vh',backgroundColor: 'lightblue', borderColor: 'red', display:'inline-block', position: "sticky", top: "30px"}}>
      <div className="container">
        <img style={{ height: '5vw', width: '5vw', display:"inline-block" }} src={img} alt="" />
      </div>
      <ListGroup>
      <h2>
      <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Customer Profile Card:-</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Signed in as:</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Customer Name: {customerName}</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Customer ID: {customerId}</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action> <a className="menu-item " href="/">Logout</a></ListGroupItem>
        </h2>
      </ListGroup>

    </div>
    <div className="container" style={{width:'80%',display:'inline-block',verticalAlign: "top"}}>
    <MenuContent/>
    </div>
    </div>
    
  );
}

export default Custmr_card;
