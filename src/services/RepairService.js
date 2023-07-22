import axios from 'axios'

const REPAIR_BASE_REST_API_URL='http://localhost:8080/repairs';
class RepairService{
    getAllRepairs(){
        return axios.get(REPAIR_BASE_REST_API_URL)
    }
    createRepair(repair){
        return axios.post(REPAIR_BASE_REST_API_URL,repair)
    }
    getRepairById(repairId){
        return axios.get(REPAIR_BASE_REST_API_URL+"/"+repairId);
    }
    updateRepair(repairId,repair){
        return axios.put(REPAIR_BASE_REST_API_URL+"/"+repairId, repair);
    }
    deleteRepair(repairId){
        return axios.delete(REPAIR_BASE_REST_API_URL+ '/' + repairId);
    }



}
// eslint-disable-next-line 
export default new RepairService(); 