import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function ComplainForm() {

    function SaveButton(){
        toast.success("Successfully Submited");
      }

 
  return (
    
    <div>
        <ToastContainer theme="light" autoClose={2500}/>
        <div>

        <form className='container'>
            <div className="form-group">
                     <h2 style={{textAlign:'center'}}> Lodge your grievances and complaints   </h2>
                     <br/>
            <label><h4>Enter Full Name</h4></label> <input style={{height:"3rem"}} type="text" className="form-control" name="name" />
            </div>

            <div className="form-group">
                <label><h4>Enter Address</h4></label> <input style={{height:"3rem"}} type="text" className="form-control" name="address" />
            </div>

            <div className="form-group">
                <label><h4>Enter Email</h4></label> <input style={{height:"3rem"}} type="email" className="form-control" name="email" />
            </div>

            <div className="form-group">
                <div><h4>Enter Phone No</h4></div> <input style={{height:"3rem"}} type="number" className="form-control" name="phno" />
            </div>


            <div className="form-group" style={{height:'230px'}}>
                <label><h4>Complaint</h4></label> <input  type="text" className="form-control" style={{height : "200px"}} name="complaint" />
            </div>

            <button className="btn btn-primary" onClick={SaveButton}>Submit</button>

        </form>
        </div>
    </div>
  )
}
