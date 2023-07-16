import React, { useEffect, useState } from 'react'
import DeviceService from '../services/DeviceService'
import { Link } from 'react-router-dom'

const ListDeviceComponent = () => {
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
     
      const handlesearch=(event)=>{
        const getSearch= event.target.value; 
        if(getSearch.length > 0)
        {     
         const searchdata= devices.filter( (item)=> item.brand.toLowerCase().includes(getSearch));
         setDevices(searchdata);
        } else {
          setDevices(filterdata);
        }
        setQuery(getSearch);
      }

  return (
    <div className="container">
        <h2 className='text-center'>Device Management</h2>
      
        <Link to ="/add-device" className='btn btn-primary mb-2'>Add Device</Link>
        <React.Fragment>              
        <div className="col-md-12 mt-3 mb-3">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={query}
            style={{ width: '1000px', height: '40px', fontSize: '14px' }} 
            onChange={handlesearch}
            placeholder="Search..."
          />
          <div className="input-group-append">
            <button className="btn btn-info" onClick={getAllDevices}>
              Search
            </button>
          </div>
        </div>
      </div>
        </React.Fragment>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Device Id</th>
                <th>Device Brand</th>
                <th>Device Type</th>
                <th>Device Model</th>
                <th>Actions</th>
               
                
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
                           <td>
                            <Link className='btn btn-info' to={`/edit-device/${device.id}`}>Update</Link>
                            <button className='btn btn-danger' onClick={() => deleteDevice(device.id)}
                            style ={{marginLeft:"10px"}}> Delete </button>
                           </td>
                            
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListDeviceComponent
