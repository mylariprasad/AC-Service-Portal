import React from 'react'
import img from './profile.png'
import { ListGroup, ListGroupItem } from 'reactstrap'

function Custmr_card() {
  return (

    <div class="card" style={{width: '25rem',height:'50rem',backgroundColor:'cyan',borderColor:'black'}}>

      <div className="container">
        <img style={{height: '5rem', width: '5rem'}} src={img} alt="" />
      </div>
      <ListGroup >
        <ListGroupItem style={{height:'4rem', backgroundColor: 'cyan'}} tag="a" action>Prakhar Shukla</ListGroupItem>
        <ListGroupItem style={{height:'4rem', backgroundColor: 'cyan'}} tag="a" action>Customer ID</ListGroupItem>
        <ListGroupItem style={{height:'4rem', backgroundColor: 'cyan'}} tag="a" action>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem style={{height:'4rem', backgroundColor: 'cyan'}} tag="a" action>Logout</ListGroupItem>
      </ListGroup>
      
        
    </div>
  )
}

export default Custmr_card