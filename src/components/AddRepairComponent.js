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

  const title = id ? 'Update Repair' : 'Add Repair';

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">{title}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Repair Name:</label>
                  <input
                    type="text"
                    placeholder="Enter repair name"
                    name="repName"
                    className="form-control"
                    value={repName}
                    onChange={(e) => setRepName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Customer ID:</label>
                  <input
                    type="text"
                    placeholder="Enter customer ID"
                    name="custId"
                    className="form-control"
                    value={custId}
                    onChange={(e) => setCustId(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Device ID:</label>
                  <input
                    type="text"
                    placeholder="Enter device ID"
                    name="deviceId"
                    className="form-control"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Description:</label>
                  <input
                    type="text"
                    placeholder="Enter description"
                    name="des"
                    className="form-control"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Status:</label>
                  <input
                    type="text"
                    placeholder="Enter status"
                    list="browsers" name="myStatus"
                    className="form-control"
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
                <Link to="/repairs" className="btn btn-danger">
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
