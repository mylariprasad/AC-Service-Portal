import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import EmployeeRepairMappingService from '../services/EmployeeRepairMappingService'

function ListEmployeeRepair() {
    const [employeeRepairs,setEmployeeRepairs]=useState([])

    useEffect(()=>{
      getAllEmployeeRepairs();
    },[])
    
    const getAllEmployeeRepairs = async () => {
        EmployeeRepairMappingService.getAllEmployeeMappings().then((response)=>{
          setEmployeeRepairs(response.data)  
          setFilterdata(response.data);
          console.log(response.data);
         }).catch(error=>{
          console.log(error);
         })
        };
    
     const [filterdata, setFilterdata]= useState([]);
     const [query, setQuery] = useState('');
     const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('id');
      const handlesearch=(event)=>{
        const getSearch= event.target.value; 
        if(getSearch.length > 0)
        {     
            console.log(getSearch);
         const searchdata= filterdata.filter( (item)=> item[selectedSearchCriteria].toString() === getSearch.toString());
         console.log(searchdata)
         setEmployeeRepairs(searchdata);
        } else {
            setEmployeeRepairs(filterdata);
        }
        setQuery(getSearch);
      }

      const handleSearchCriteriaChange = (event) => {
        setSelectedSearchCriteria(event.target.value);
        setQuery('');
        setEmployeeRepairs(filterdata);
      };
  return (
    <div>
      <div className='container'>
      <h2 className="text-center">Repairs Assigned to Employees</h2>
    
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
              <option value='employeeId'>Employee Id</option>
              <option value='repairId'>Repair Id</option>
            </select>
          
        </div>
      </div>
          

        </React.Fragment>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Sl.No</th>
                <th>Employee Id</th>
                <th>Repair Id</th>
            </thead>
            <tbody>
                {
                    employeeRepairs.map(
                        employeeRep=>
                        <tr key={employeeRep.id}>
                            <td>{employeeRep.id}</td>
                            <td>{employeeRep.employeeId}</td>
                            <td>{employeeRep.repairId}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default ListEmployeeRepair