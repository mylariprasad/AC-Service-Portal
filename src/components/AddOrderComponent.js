import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeviceService from '../services/DeviceService';
import CustomerService from '../services/CustomerService';
import RepairService from '../services/RepairService';
// import img from '../profile.png'
import { ListGroup, ListGroupItem } from 'reactstrap'

const AddOrderComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [repName, setRepName] = useState('');
  const [device, setDevice] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [des, setDes] = useState('');
  const [status, setStatus] = useState('');
  const [custId, setCustId] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const navigate = useNavigate();
  const { customerId: selectedCustomerId, deviceId: selectedDeviceId } = useParams();

  useEffect(() => {
    if (selectedCustomerId) {
      fetchCustomerData(selectedCustomerId);
    }
    if (selectedDeviceId) {
      fetchDeviceData(selectedDeviceId);
    }
  }, [selectedCustomerId, selectedDeviceId]);

  const fetchCustomerData = async (customerId) => {
    try {
      const response = await CustomerService.getCustomerById(customerId);
      setCustomer(response.data);
      setCustomerId(response.data.id);
      setCustId(response.data.id);
    } catch (error) {
      console.error('Error fetching customer:', error);
    }
  };

  const fetchDeviceData = async (deviceId) => {
    try {
      const response = await DeviceService.getDeviceById(deviceId);
      setDevice(response.data);
      setDeviceId(response.data.id);
    } catch (error) {
      console.error('Error fetching device:', error);
    }
  };

  const saveRepair = (e) => {
    e.preventDefault();
    
    const customer = { id: custId };
    const devices = [{ id: deviceId }];
    
    const repair = { repName, customer, devices, des, status };
    
    // Implement your logic to save the order
    console.log('Order:', repair);
    RepairService.createRepair(repair)
        .then((response) => {
          console.log(response.data);
          navigate('/repairs');
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div>
      <h2 className="text-center">Add Order</h2>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
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
                  <label className="form-label">Customer Id:</label>
                  <input
                    type="text"
                    placeholder="Enter status"
                    className="form-control"
                    value={custId}
                    readOnly 
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Device Id:</label>
                  <input
                    type="text"
                    placeholder="Enter status"
                    className="form-control"
                    value={deviceId}
                    readOnly
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
                    className="form-control"
                    value="Not Ordered yet" 
                    readOnly 
                    required
                  />
                </div>
                <button className="btn btn-success" onClick={saveRepair}>
                  Submit
                </button>
                <Link to="/orders" className="btn btn-danger">
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

export default AddOrderComponent;
