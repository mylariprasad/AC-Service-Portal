import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'


export default function MenuContent() {
  return (

    <div>
      <ListGroup>
        
        <h2>
        <ListGroupItem style={{height:'6rem',borderColor:'black',backgroundColor:'lightpink'}} tag="a" href='/add-device' action>
            Register the Device you want to Repair !
        </ListGroupItem>

        <ListGroupItem style={{height:'6rem',borderColor:'black',backgroundColor:'cyan'}} tag="a" href='/devices_2' action>
           View  the Registered Device's corresponding ID
        </ListGroupItem>

        <ListGroupItem style={{height:'6rem',borderColor:'black',backgroundColor:'yellow'}} tag="a" href='/add-repair' action>
            Service Booking Form (Book your Repair service !)
        </ListGroupItem>

        <ListGroupItem style={{height:'6rem',borderColor:'black',backgroundColor:'lightgreen'}} tag="a" href='/Customer_help' action>
            Help -(See steps how to fill up the form !)
        </ListGroupItem>

        <ListGroupItem style={{height:'6rem',borderColor:'black',backgroundColor:'lightpink'}} tag="a" href='/AboutUs' action>
            Contact
        </ListGroupItem>
        
        <ListGroupItem style={{height:'6rem',borderColor:'black',backgroundColor:'lightyellow'}} tag="a" href='/AboutUs' action>
            About
        </ListGroupItem>
        </h2>

      </ListGroup>

    </div> 
  )
}

