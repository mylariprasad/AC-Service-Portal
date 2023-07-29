import React, { useEffect, useState } from 'react';
import EmployeeRepairMappingService from '../services/EmployeeRepairMappingService';
import EmployeeService from '../services/EmployeeService';
import RepairService from '../services/RepairService';
import { Link, useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedRepairIds, setSelectedRepairIds] = useState({});
  const [repairIds, setRepairIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
    fetchRepairIds();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        setFilterdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('name');

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = filterdata.filter((item) =>
        item[selectedSearchCriteria].toLowerCase().includes(getSearch)
      );
      setEmployees(searchdata);
    } else {
      setEmployees(filterdata);
    }
    setQuery(getSearch);
  };

  const handleSearchCriteriaChange = (event) => {
    setSelectedSearchCriteria(event.target.value);
    setQuery('');
    setEmployees(filterdata);
  };

  const fetchRepairIds = () => {
    RepairService.getAllRepairs()
      .then((response) => {
        const repairIds = response.data.map((repair) => repair.id);
        setRepairIds(repairIds);

        // Now that we have the repairIds, we can fetch employee-repair mappings and populate selectedRepairIds state
        EmployeeRepairMappingService.getAllEmployeeMappings()
          .then((response) => {
            console.log('Employee-repair mappings response:', response.data);
            const mappingData = response.data;
            const selectedRepairIds = {};
            mappingData.forEach((mapping) => {
              selectedRepairIds[mapping.employeeId] = mapping.repairId;
            });
            setSelectedRepairIds(selectedRepairIds);
            // Update the selectedRepairIds state with fetched data
          })
          .catch((error) => {
            console.log('Error fetching employee-repair mappings:', error);
          });
      })
      .catch((error) => {
        console.log('Error fetching repair IDs:', error);
      });
  };

  const saveRepairId = (employeeId, selectedRepairId) => {
    // Save the employee-repair mapping in the backend
    EmployeeRepairMappingService.assignRepairIdToEmployee(employeeId, selectedRepairId)
      .then((response) => {
        // Handle successful response if needed
        console.log('Mapping saved successfully!');
        navigate('/employees'); // Navigate to the /employees page
      })
      .catch((error) => {
        // Handle error if needed
        console.log('Error while saving mapping:', error);
      });
  };

  const handleRepairIdChange = (employeeId, event) => {
    const selectedRepairId = event.target.value;
    setSelectedRepairIds((prevSelectedRepairIds) => ({
      ...prevSelectedRepairIds,
      [employeeId]: selectedRepairId,
    }));

    saveRepairId(employeeId, selectedRepairId);
  };

  return (
    <div className="container">
      <h2 className="text-center">Employee Management</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>

      <React.Fragment>
        <div className="col-md-12 mt-3 mb-3">
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={query}
              style={{ width: '500px', height: '40px', fontSize: '14px', marginRight: '300px' }}
              onChange={handlesearch}
              placeholder="Search..."
            />
            <div className="input-group-append">
              <button className="btn btn-info btn-dark">SearchBy:</button>
            </div>
            <select
              className="form-control"
              style={{ width: '150px', height: '40px', fontSize: '14px', marginLeft: '20px' }}
              value={selectedSearchCriteria}
              onChange={handleSearchCriteriaChange}
            >
              <option value="name">Name</option>
              <option value="emailId">Email Id</option>
              <option value="phn">Phone Number</option>
            </select>
          </div>
        </div>
      </React.Fragment>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee EmailId</th>
            <th>Employee PhoneNumber</th>
            <th>Active Status</th>
            <th>Actions</th>
            <th>Repair ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.emailId}</td>
              <td>{employee.phn}</td>
              <td>{employee.act}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: '30px' }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/assign-repair-id/${employee.id}`}>Select</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
