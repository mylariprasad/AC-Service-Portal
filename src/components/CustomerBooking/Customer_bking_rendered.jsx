import React from 'react';
//import './App.css';
import NavBar from './NavBar';
import {Container, Row, Col} from "reactstrap";
import MenuContent from './MenuContent';
import RequetForm from './RequetForm';


export default function Customer_bking_rendered() {

  return (
    <div>
      <NavBar></NavBar>
      <Container className='my-3'>
        <Row>
          <Col md={4}>
          <MenuContent></MenuContent>
          </Col>
          <Col md={8}>
          <RequetForm></RequetForm>
          </Col>
        </Row>
      </Container>

    </div>
  )
}