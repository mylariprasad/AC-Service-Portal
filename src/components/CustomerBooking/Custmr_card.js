import React from 'react'
import img from './profile.png'
function Custmr_card() {
  return (

    <div class="card" style={{width: '25rem',height:'50rem',backgroundColor:'cyan',borderColor:'black'}}>
  <div className="container">
    <img style={{height: '5rem', width: '5rem'}} src={img} alt="" />

  </div>
  <div class="card-body">
    <h5 class="card-title">Prakhar Shukla</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{height:'3.6rem',backgroundColor:'cyan'}}>Customer ID -</li>
    <li class="list-group-item" style={{height:'3.6rem',backgroundColor:'cyan'}}>Dapibus ac facilisis in</li>
    
  </ul>
  <div class="card-body">
  <h5 class="card-title">Logout</h5>
  </div>
</div>
  )
}

export default Custmr_card