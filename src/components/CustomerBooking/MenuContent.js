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
           View  Device List & corresponding ID
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='help' action>
            Help -(See steps how to fill up the form !)
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='Contact' action>
            Contact
        </ListGroupItem>
        <ListGroupItem style={{height:'4rem'}} tag="a" href='CustomerAbout' action>
            About
        </ListGroupItem>
      </ListGroup>
    </div> 
  )
}

