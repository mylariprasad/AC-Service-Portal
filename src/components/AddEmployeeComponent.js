import React, { useEffect, useState } from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {
    const[name,setName]=useState('')
    const[emailId,setEmailId]=useState('')
    const[phn,setPhn]=useState('')
    const[act,SetAct]=useState('')
    
    
    const navigate=useNavigate();
    const {id}=useParams();
   
   
    const saveEmployee=(e)=>{
        e.preventDefault();
        const employee={name,emailId,phn,act}
        if(id){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                navigate('/employees')
            }).catch(error=>{
                console.log(error)
               
            })
        }
         else{
         EmployeeService.createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigate('/employees')
        }).catch(error=>{
            console.log(error)
           
        })
    
   
}
}
    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setName(response.data.name)
            setEmailId(response.data.emailId)
            setPhn(response.data.phn)
            SetAct(response.data.act)
        }).catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }
  return (
    <div>
        <br></br>
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    title()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                          <label className='form-label'>Name :</label>
                          <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className='form-control'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}></input>  
                        </div>
                        <div className = "form-group mb-2">
                                    <label className = "form-label">Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                       
                                        
                                    >
                                    </input>
                                    
                        </div>
                        <div className = "form-group mb-2">
                                    <label className = "form-label">Phone number :</label>
                                    <input
                                        type = "phn"
                                        placeholder = "Enter phone number"
                                        name = "phn"
                                        className = "form-control"
                                        value = {phn}
                                        onChange = {(e) => setPhn(e.target.value)}
                                    >
                                    </input>
                        </div>
                        <div className = "form-group mb-2">
                                    <label className = "form-label">Active Status :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Status"
                                        name = "act"
                                        className = "form-control"
                                        value = {act}
                                        onChange = {(e) => SetAct(e.target.value)}
                                    >
                                    </input>
                        </div>
                        <button className='btn btn-success' onClick={(e)=>saveEmployee(e)}>Submit</button>
                        <Link to="/employees" className='btn btn-danger'>Cancel</Link>
                        
                    </form>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
            }

export default AddEmployeeComponent
