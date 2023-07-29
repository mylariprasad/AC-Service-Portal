import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const EmployeeRepairMappingService = {
  getAllEmployeeMappings: () => {
    return axios.get(API_BASE_URL+'/api/employeeRepairMapping');
  },
  assignRepairIdToEmployee: (employeeId, repairId) => {
    return axios.put( API_BASE_URL+'/api/employeeRepairMapping/assignRepairIdToEmployee/'+employeeId, repairId);
  },
  
};

export default EmployeeRepairMappingService;