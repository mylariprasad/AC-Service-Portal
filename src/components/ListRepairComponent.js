import React, { useEffect, useState } from 'react';
import RepairService from '../services/RepairService';
import { Link } from 'react-router-dom';

const ListRepairComponent = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    getAllRepairs();
    
  }, []);

  const getAllRepairs = () => {
    RepairService.getAllRepairs()
      .then((response) => {
        setRepairs(response.data);
        setFilterData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteRepair = (repairId) => {
    RepairService.deleteRepair(repairId)
      .then((response) => {
        getAllRepairs();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('repName');
  const handleSearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata= filterData.filter( (item)=> item[selectedSearchCriteria].toLowerCase().includes(getSearch));
      setRepairs(searchdata);
    } else {
      setRepairs(filterData);
    }
    setQuery(getSearch);
  };

  const handleSearchCriteriaChange = (event) => {
    setSelectedSearchCriteria(event.target.value);
    setQuery('');
    setRepairs(filterData);
  };
  return (
    <div className="container">
      <h2 className="text-center">Repair Management</h2>
      {/*<Link to="/add-repair" className="btn btn-primary mb-2">
        Book a New Repair Service !
      </Link>*/}

      <div className="col-md-12 mt-3 mb-3">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={query}
            style={{ width: '500px', height: '40px', fontSize: '14px', marginRight:"300px" }}
            onChange={handleSearch}
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
              <option value='repName'>Repair Name</option>
              <option value='des'>Description</option>
              <option value='status'>status</option>
              
            </select>
        </div>
      </div>
          
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Repair ID</th>
            <th>Repair Name</th>
            <th>Customer ID</th>
            <th>Device ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {repairs.map((repair) => (
            <tr key={repair.id}>
              <td>{repair.id}</td>
              <td>{repair.repName}</td>
              <td>{repair.customer.id}</td>
              <td>{repair.device.map((device) => device.id).join(", ")}</td>
              <td width="20%">{repair.des}</td>
              <td>{repair.status}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-repair/${repair.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRepair(repair.id)}
                  style={{ marginLeft: '30px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRepairComponent;
