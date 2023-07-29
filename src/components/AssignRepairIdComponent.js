import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeRepairMappingService from '../services/EmployeeRepairMappingService';
import RepairService from '../services/RepairService';

const AssignRepairIdComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});
  const [selectedRepairId, setSelectedRepairId] = useState('');
  const [availableRepairIds, setAvailableRepairIds] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
    fetchAvailableRepairIds();
  }, [id]);

  const fetchEmployeeData = () => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAvailableRepairIds = () => {
    RepairService.getAllRepairs()
      .then((response) => {
        const allRepairIds = response.data.map((repair) => repair.id);
        EmployeeRepairMappingService.getAllEmployeeMappings()
          .then((response) => {
            const mappingData = response.data;
            const assignedRepairIds = new Set(mappingData.map((mapping) => mapping.repairId));
            const availableRepairIds = allRepairIds.filter((id) => !assignedRepairIds.has(id));
            setAvailableRepairIds(availableRepairIds);

            // Set the selected repair ID for the specific employee
            const employeeMapping = mappingData.find((mapping) => mapping.employeeId === id);
            if (employeeMapping) {
              setSelectedRepairId(employeeMapping.repairId);
            }
          })
          .catch((error) => {
            console.log('Error fetching employee-repair mappings:', error);
          });
      })
      .catch((error) => {
        console.log('Error fetching repair IDs:', error);
      });
  };

  const handleRepairIdChange = (event) => {
    setSelectedRepairId(event.target.value);
  };

  const saveRepairId = () => {
    // Save the employee-repair mapping in the backend
    const mapping = { repairId: selectedRepairId };
    console.log(id);
    console.log(mapping);
    EmployeeRepairMappingService.assignRepairIdToEmployee(id, mapping) // Pass the employee ID and mapping object
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

  return (
    <div className="container" style={styles.container}>
      <h2 className="text-center">Assign Repair ID for Employee {employee.name}</h2>
      <div>
        <label style={{ color: 'black', marginBottom: '10px' }}>Select Repair ID:</label>
        <select
          value={selectedRepairId}
          onChange={handleRepairIdChange}
          style={styles.select}
        >
          <option value="">Select Repair ID</option>
          {availableRepairIds.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.buttonGroup}>
        <button onClick={saveRepairId} style={styles.buttonPrimary}>Save</button>
        <Link to="/employees" style={styles.buttonSecondary}>Cancel</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  buttonPrimary: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  buttonSecondary: {
    textDecoration: 'none',
    backgroundColor: '#ddd',
    color: '#333',
    padding: '10px 15px',
    borderRadius: '4px',
  },
};

export default AssignRepairIdComponent;
