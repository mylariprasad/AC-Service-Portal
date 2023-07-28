import React, { useEffect, useState } from 'react'
import DeviceService from '../services/DeviceService'
import { Link } from 'react-router-dom'

const ListDeviceComponent_2 = () => {
    const [devices, setDevices] = useState([])

    useEffect(() => {
       
        getAllDevices();
  
    }, [])
     const getAllDevices =() => {
        DeviceService.getAllDevices().then((Response) => {
            setDevices(Response.data)
            setFilterdata(Response.data);

            console.log(Response.data);
        }).catch(error => {
            console.log(error);

        })

     }
    const deleteDevice =(deviceId) => {
        DeviceService.deleteDevice(deviceId).then((Response) =>{
        getAllDevices();

        }).catch(error =>{
            console.log(error);
        }) 
    }
    const [filterdata, setFilterdata]= useState([]);
     const [query, setQuery] = useState('');
     const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('brand');
      const handlesearch=(event)=>{
        const getSearch= event.target.value; 
        if(getSearch.length > 0)
        {     
          const searchdata= filterdata.filter( (item)=> item[selectedSearchCriteria].toLowerCase().includes(getSearch));
         setDevices(searchdata);
        } else {
          setDevices(filterdata);
        }
        setQuery(getSearch);
      }

      const handleSearchCriteriaChange = (event) => {
        setSelectedSearchCriteria(event.target.value);
        setQuery('');
        setDevices(filterdata);
      };

  return (
    <div className="container">
        <h2 className='text-center'>Device Management</h2>
      
        
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
              <option value='brand'>Brand</option>
              <option value='type'>Type</option>
              <option value='model'>Model</option>
              
            </select>
        </div>
      </div>
        </React.Fragment>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Device Id</th>
                <th>Device Brand</th>
                <th>Device Type</th>
                <th>Device Model</th>
                
               
                
            </thead>
            <tbody>
                {
                    devices.map(
                        device=>
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            <td>{device.brand}</td>
                            <td>{device.type}</td>
                            <td>{device.model}</td>
                          
                            
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListDeviceComponent_2
