import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function MenuContent() {
  return (
    <div>
      <ListGroup>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='/' action>
            Home
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='add-repair' action>
            Service Booking Form
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='ComplainForm' action>
            Complaint Form
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='Contact' action>
            Contact
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='About' action>
            About
        </ListGroupItem>
      </ListGroup>
    </div> 
  )
}
