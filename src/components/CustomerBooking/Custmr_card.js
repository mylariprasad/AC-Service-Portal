import React, { useState, useEffect } from 'react';
import img from './profile.png';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AC1 from '../AC1.jpg'
import LG from '../LG.jpg'
import Panasonic from '../Panasonic.jpg'
import Samsung from '../Samsung.jpg'
import '../../css/Custmr_card.css'

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
    <div className="main-container" style={{width:"100vw", marginTop:"30px"}}>
    <div className="card1" style={{ width: '20%', height: '90vh',backgroundColor: 'lightblue', borderColor: 'red', display:'inline-block', position: "sticky", top: "30px"}}>
      <div className="container">
        <img style={{ height: '5vw', width: '5vw', display:"inline-block" }} src={img} alt="" />
      </div>
      <ListGroup>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Signed in :</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Customer Name: {customerName}</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action>Customer ID: {customerId}</ListGroupItem>
        <ListGroupItem style={{ height: '4rem', backgroundColor: 'lightgrey' }} tag="a" action> <a className="menu-item " href="/">Logout</a></ListGroupItem>
      </ListGroup>
    </div>
    <div className="container" style={{width:'80%',display:'inline-block',verticalAlign: "top"}}>
                <div className="row" style={{display:"flex"}}>
                    <div className="col-md-3 my-3">
                        <div className="card">
                            <img src={AC1}  className="card-img-top" alt="AC device" />
                            <div className="card-body">
                                <h4 class="a-text-normal">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper,2.5 Filter, 2023 Model)</h4>
                                <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>
                                <Link className='btn btn-sn btn-dark' style={{ backgroundColor: 'navy', color: 'white' }} to={`/addorder/${customerId}/8`}>Book Repair</Link>
                                {/* <Link to="/add-repaireeee/1" className="btn btn-primary mb-2">Add Repair</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card">
                            <img src={Samsung}  className="card-img-top" alt="AC device"/>
                            <div className="card-body">
                                <h4 class="a-text-normal">Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Easy Filter Plus)</h4>
                                <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>
                                <a className="btn btn-sn btn-dark" style={{ backgroundColor: 'navy', color: 'white' }}>Book Repair</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3" >
                        <div className="card">
                            <img src={LG} className="card-img-top" alt="AC device"/>
                            <div className="card-body" >
                                <h4 class="a-text-normal">LG 1.5 Ton 5 Star Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter 2023 Model)</h4>
                                <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>                                  
                                <a className="btn btn-sn btn-dark" style={{ backgroundColor: 'navy', color: 'white' }}>Book Repair</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card">
                            <img src={Panasonic} className="card-img-top" alt="AC device"/>
                            <div className="card-body">
                                <h4 class="a-text-normal">Panasonic 1.5 Ton 5 Star Inverter Split AC (Copper Condenser, 7 in 1 Convertible with AI Mode)</h4>                           
                                 <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>
                                <a className="btn btn-sn btn-dark" style={{ backgroundColor: 'navy', color: 'white' }}>Book Repair</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card">
                            <img src="cc" className="card-img-top" alt="AC device"  />
                            <div className="card-body">
                                <h4 class="a-text-normal">Panasonic 1.5 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with AI Mode)</h4>                           
                                 <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>
                                <a className="btn btn-sn btn-dark" style={{ backgroundColor: 'navy', color: 'white' }}>Book Repair</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  );
}

export default Custmr_card;
