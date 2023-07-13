import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RepairService from '../services/RepairService';

const AddRepairComponent = () => {
  const [repName, setRepName] = useState('');
  const [custId, setCustId] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [des, setDes] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const saveRepair = (e) => {
    e.preventDefault();
    const customer = { id: custId };
    const devices = deviceId.split(',').map((id) => ({ id: id.trim() }));
    const repair = { repName, customer, device:devices.map((device) => ({ id: device.id })), des, status };
    if (id) {
      RepairService.updateRepair(id, repair)
        .then((response) => {
          navigate('/repairs');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RepairService.createRepair(repair)
        .then((response) => {
          console.log(response.data);
          navigate('/repairs');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      RepairService.getRepairById(id)
        .then((response) => {
          setRepName(response.data.repName);
          setCustId(response.data.customer.id);
          setDeviceId(response.data.devices.map((device) => device.id).join(', '));
          setDes(response.data.des);
          setStatus(response.data.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = id ? 'Update Repair' : 'Book a New Repair Service !';

  return (
    <div>
      <br />
      <div className="repair">
        <div className="row">
          <div className=" col-md-8 offset-md-3 offset-md-3">
            <h1 className="text-center">{title}</h1>
            <div className="body-md-8">
              <form>
                <div className="form-group mb-2">
                
                  <label className="form-label"><h3>Repair Name:</h3></label>
                  
                  <input
                    type="text"
                    
                    placeholder="Enter repair name"
                    name="repName"
                    className="form-control form-control-lg"
                    value={repName}
                    onChange={(e) => setRepName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group mb-2">
                  <label className="form-label"><h3>Customer ID:</h3></label>
                  <input
                    type="text"
                    placeholder="Enter customer ID"
                    name="custId"
                    className="form-control form-control-lg"
                    value={custId}
                    onChange={(e) => setCustId(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group mb-2">
                  <label className="form-label"><h3>Device ID:</h3></label>
                  <input
                    type="text"
                    placeholder="Enter device ID"
                    name="deviceId"
                    className="form-control form-control-lg"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group mb-2">
                  <label className="form-label"><h3>Description:</h3></label>
                  <input
                    type="text"
                    placeholder="Enter description"
                    name="des"
                    className="form-control form-control-lg"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group mb-2">
                  <label className="form-label"><h3>Status:</h3></label>
                  <input
                    type="text"
                    placeholder="Enter status"
                    list="browsers" name="myStatus"
                    className="form-control form-control-lg"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  />
                  <datalist id="browsers">
                  <option value="In Progress"/>
                  <option value="Completed"/>
                  <option value="Hold"/>
                  <option value="Cancelled"/>
                </datalist>
                </div>
                <button className="btn btn-success" onClick={saveRepair}>
                  Submit
                </button>
                 &emsp;&emsp;
                <Link to="/Customer_bking_rendered" className="btn btn-danger">
                   Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRepairComponent;
