import React from 'react'
import img from './profile.png'
function Custmr_card() {
  return (
    <div class="card" style={{width: '25rem',height:'20rem'}}>
  <div className="container">
    <img style={{height: '5rem', width: '5rem'}} src={img} alt="" />

  </div>
  <div class="card-body">
    <h5 class="card-title">Prakhar Shukla</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{height:'3.6rem'}}>Cras justo odio</li>
    <li class="list-group-item" style={{height:'3.6rem'}}>Dapibus ac facilisis in</li>
    <li class="list-group-item" style={{height:'3.6rem'}}>Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    
  </div>
</div>
  )
}

export default Custmr_card