import axios from "axios";
const DEVICE_BASE_REST_API_URL ="http://localhost:8080/devices";

class DeviceService{
    getAllDevices(){
        return axios.get(DEVICE_BASE_REST_API_URL)
    }
    createDevice(device){
        return axios.post(DEVICE_BASE_REST_API_URL, device)
    }
    getDeviceById(deviceId){
         return axios.get(DEVICE_BASE_REST_API_URL + '/' + deviceId);
    }
    updateDevice(deviceId,device){
        return axios.put(DEVICE_BASE_REST_API_URL +'/' +deviceId, device);
    }
    deleteDevice(deviceId){
        return axios.delete(DEVICE_BASE_REST_API_URL +'/' +deviceId);
    }

    
}
// eslint-disable-next-line
export default new DeviceService();