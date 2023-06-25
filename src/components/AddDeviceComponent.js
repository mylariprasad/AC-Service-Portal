
import React,{useState,useEffect} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom';
import DeviceService from '../services/DeviceService'

const AddDeviceComponent = () => {
    const [brand, setBrand] = useState('')
    const [type,setType] = useState('')
    const [model,setModel]= useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveDevice = (e) => {
        e.preventDefault();
        const device ={brand, type, model}
        if(id){
          DeviceService.updateDevice(id, device).then((response) => {  
            navigate('/devices');
          }).catch(error =>{
            console.log(error);
          })
       

        }else{
          DeviceService.createDevice(device).then((response) =>{
            console.log(response.data)  
    
             navigate('/devices');
            }).catch(error => {
              console.log(error);
            })

        }
        
   
    }
    useEffect(() => {
     DeviceService.getDeviceById(id).then((response) => {
          setBrand(response.data.brand)
          setModel(response.data.model)
          setType(response.data.type)

     }).catch(error => {
      console.log(error)
     })
    
      
    }, [])
    
    const title = () => {

      if(id){
          return <h2 className = "text-center">Update Device</h2>
      }else{
          return <h2 className = "text-center">Add Device</h2>
      }
  }
  return (
    <div>
      <br /> <br /><br />
         <div className="container">

            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {
                      title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Brand :</label>
                                <input
                                type="text"
                                placeholder='Enter brand name'
                                name="brand"
                                className='form-control'
                                value={brand}
                                onChange={(e)=> setBrand(e.target.value)}
                                >

                                </input></div>
                                <div className='form-group mb-2'>
                                <label className='form-label'>Type :</label>
                                <input
                                type="text"
                                placeholder='Enter type name'
                                name="type"
                                className='form-control'
                                value={type}
                                onChange={(e)=> setType(e.target.value)}
                                >

                                </input></div>

                                <div className='form-group mb-2'>
                                <label className='form-label'>Model:</label>
                                <input
                                type="text"
                                placeholder='Enter model name'
                                name="model"
                                className='form-control'
                                value={model}
                                onChange={(e)=> setModel(e.target.value)}
                                >

                                </input></div>
                           <button className='btn btn-success' onClick={(e) => saveDevice(e)}>Submit</button>
                           <Link to="/devices" className='btn btn-danger'>Cancel</Link>

                        </form>
                    </div>
                </div>
            </div>
         </div>


    </div>
  )
}

export default AddDeviceComponent