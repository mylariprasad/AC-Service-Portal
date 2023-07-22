import React from 'react'
import AC1 from './AC1.jpg'
import Samsung from './Samsung.jpg'
import LG from './LG.jpg'
import Panasonic from "./Panasonic.jpg"
import '../css/DeviceItems.css'
import { Link } from 'react-router-dom'


function DeviceItems() {
    return (
        <div>   
            <div className="container" style={{width:'80rem'}}>
                <div className="row">
                    <div className="col-md-3 my-3">
                        <div className="card" style={{ width: '18rem', height:'23rem' }}>
                            <img src={AC1}  className="card-img-top" alt="AC device" style={{ height: '200px', width: '100%', objectFit: 'cover' }}/>
                            <div className="card-body">
                                <h4 class="a-text-normal">Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper,2.5 Filter, 2023 Model)</h4>
                                <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>
                                <Link className='btn btn-sn btn-dark' style={{ backgroundColor: 'navy', color: 'white' }} to="/addorder/6/8">Book Repair</Link>
                                {/* <Link to="/add-repaireeee/1" className="btn btn-primary mb-2">Add Repair</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card" style={{ width: '18rem', height:'23rem' }}>
                            <img src={Samsung}  className="card-img-top" alt="AC device" style={{ height: '200px', width: '100%', objectFit: 'cover' }}/>
                            <div className="card-body">
                                <h4 class="a-text-normal">Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Easy Filter Plus)</h4>
                                <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>
                                <a className="btn btn-sn btn-dark" style={{ backgroundColor: 'navy', color: 'white' }}>Book Repair</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3" >
                        <div className="card" style={{ width: '18rem', height:'23rem' }}>
                            <img src={LG} className="card-img-top" alt="AC device" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h4 class="a-text-normal">LG 1.5 Ton 5 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter 2023 Model)</h4>
                                <div><span class="a-price-symbol">₹</span><span class="a-price-whole">999</span></div>                                  
                                <a className="btn btn-sn btn-dark" style={{ backgroundColor: 'navy', color: 'white' }}>Book Repair</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="card" style={{ width: '18rem', height:'23rem'}}>
                            <img src={Panasonic} className="card-img-top" alt="AC device" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
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
    )
}

export default DeviceItems
