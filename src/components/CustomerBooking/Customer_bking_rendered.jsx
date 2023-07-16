import React from 'react';
//import './App.css';
import NavBar from './NavBar';
import {Container, Row, Col} from "reactstrap";
import MenuContent from './MenuContent';
import ComplainForm from './ComplainForm';
import Custmr_card from './Custmr_card';

export default function Customer_bking_rendered() {

  
  return (
    <div>
      <NavBar></NavBar>
      <div className='my-3'>
        <Row>
          <Col md={4}>
            <div className="container">
              <Custmr_card></Custmr_card>
            </div>
          </Col>
          <Col md={8}>
          <MenuContent></MenuContent>
          </Col>
        </Row>
      </div>

    </div>
  )
}