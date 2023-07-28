import React from 'react';
//import './App.css';
import NavBar from './NavBar';
import {Container, Row, Col} from "reactstrap";
import MenuContent from './MenuContent';
import Custmr_card from './Custmr_card';

export default function Customer_bking_rendered() {
  
  return (
    <div>
      <NavBar></NavBar>
      
      <Custmr_card ></Custmr_card>
    </div>
  )
}