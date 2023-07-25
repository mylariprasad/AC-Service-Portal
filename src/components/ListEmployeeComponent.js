import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'


const ListEmployeeComponent = () => {
    const [employees,setEmployees]=useState([])
    useEffect(()=>{
      getAllEmployees();
    },[])
    const getAllEmployees=()=>{
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)  
            setFilterdata(response.data);
            console.log(response.data);
           }).catch(error=>{
            console.log(error);
           })

    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) =>{
         getAllEmployees();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }
    
     const [filterdata, setFilterdata]= useState([]);
     const [query, setQuery] = useState('');
     const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('name');
      const handlesearch=(event)=>{
        const getSearch= event.target.value; 
        if(getSearch.length > 0)
        {     
         const searchdata= filterdata.filter( (item)=> item[selectedSearchCriteria].toLowerCase().includes(getSearch));
         setEmployees(searchdata);
        } else {
          setEmployees(filterdata);
        }
        setQuery(getSearch);
      }

      const handleSearchCriteriaChange = (event) => {
        setSelectedSearchCriteria(event.target.value);
        setQuery('');
        setEmployees(filterdata);
      };
  return (
    <div className='container'>
      <h2 className="text-center">Employee Management</h2>
      <Link to ="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
     
      <React.Fragment>                   
      <div className="col-md-12 mt-3 mb-3">
        <div className="input-group" >
          <input
            type="text"
            name="name"
            value={query}
            style={{ width: '500px', height: '40px', fontSize: '14px', marginRight:"300px" }} 
            onChange={handlesearch}
            placeholder="Search..."
          />
          <div className="input-group-append">
            <button className="btn btn-info btn-dark">
              SearchBy:
            </button> 
          </div>
          <select
              className='form-control'
              style={{ width: '150px', height: '40px', fontSize: '14px', marginLeft:"20px"}}
              value={selectedSearchCriteria}
              onChange={handleSearchCriteriaChange}
            >
              <option value='name'>Name</option>
              <option value='emailId'>Email Id</option>
              <option value='phn'>Phone Number</option>
              
            </select>
          {/* <div className="input-group-append">
            <button className="btn btn-info" onClick={getAllEmployees}>
              Search
            </button>
          </div> */}
        </div>
      </div>
          

        </React.Fragment>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee EmailId</th>
                <th>Employee PhoneNumber</th>
                <th>Active Status</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.emailId}</td>
                            <td>{employee.phn}</td>
                            <td>{employee.act}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                <button className = 'btn btn-danger' onClick ={()=>deleteEmployee(employee.id)} style = {{marginLeft:"30px"}}> Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
