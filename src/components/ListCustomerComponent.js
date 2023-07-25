import React, { useEffect, useState } from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from 'react-router-dom'


const ListCustomerComponent = () => {
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
      getAllCustomers();
    
    },[])
    const getAllCustomers=()=>{
        CustomerService.getAllCustomers().then((response)=>{
            setCustomers(response.data) 
            setFilterdata(response.data) 
            console.log(response.data);
           }).catch(error=>{
            console.log(error);
           })

    }


    const deleteCustomer = (customerId) => {
        CustomerService.deleteCustomer(customerId).then((response) =>{
         getAllCustomers();
 
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
         setCustomers(searchdata);
        } else {
          setCustomers(filterdata);
        }
        setQuery(getSearch);
      }

      const handleSearchCriteriaChange = (event) => {
        setSelectedSearchCriteria(event.target.value);
        setQuery('');
        setCustomers(filterdata);
      };
  return (
    <div className='container'>
      <h2 className="text-center">Customer Management</h2>
      <Link to ="/add-customer" className="btn btn-primary mb-2">Add Customer</Link>
      <React.Fragment>              
         
      <div className="col-md-12 mt-3 mb-3">
        <div className="input-group">
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
              <option value='email'>Email Id</option>
              <option value='phone_no'>Phone Number</option>
              
            </select>
        </div>
      </div>
          
          

        </React.Fragment>
        <table className="table table-bordered table-striped">
            <thead>
                <th>customer Id</th>
                <th>customer Name</th>
                <th>customer EmailId</th>
                <th>customer PhoneNumber</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    customers.map(
                        customer=>
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone_no}</td>
                          
                            <td>
                                <Link className='btn btn-info' to={`/edit-customer/${customer.id}`}>Update</Link>
                                <button className = 'btn btn-danger' onClick ={()=>deleteCustomer(customer.id)} style = {{marginLeft:"30px"}}> Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCustomerComponent
