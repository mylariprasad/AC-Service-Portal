// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
// import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListRepairComponent from './components/ListRepairComponent';
import AddRepairComponent from './components/AddRepairComponent';
import AdminMainPage from './components/AdminMainPage';
import Home from './pages/home/Home.js'
import AddCustomerComponent from './components/AddCustomerComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import ListDeviceComponent from './components/ListDeviceComponent';
import AddDeviceComponent from './components/AddDeviceComponent';
import ComplainForm from './components/CustomerBooking/ComplainForm';
//import CustomerAbout from './components/CustomerBooking/CustomerAbout';
import Customer_bking_rendered from './components/CustomerBooking/Customer_bking_rendered';
import Register from "./components/Login_register/Register";
import Login from "./components/Login_register/Login";
import Admin_Login from "./components/Login_register/Admin_Login";
import AboutUs from './components/AboutUs';
import AddOrderComponent from './components/AddOrderComponent';
<<<<<<< Updated upstream
import ListDeviceComponent_2 from './components/ListDeviceComponent_2';
import Customer_help from './components/CustomerBooking/Customer_help';


=======
import AssignRepairIdComponent from './components/AssignRepairIdComponent';
import ListEmployeeRepair from './components/ListEmployeeRepair';
>>>>>>> Stashed changes
function App() {
  return (
   <div>
    <Router>
    {/* <HeaderComponent/> */}
    <Routes>
  
      
      <Route  path = "/" element = {<Home/>}></Route>
      <Route path="/admin" element={<AdminMainPage/>}></Route>
      <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
      <Route path = "/add-employee" element = {<AddEmployeeComponent/>} ></Route>
      <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}></Route>
      <Route path = "/repairs" element = {<ListRepairComponent/>}></Route>
      <Route path = "/add-repair" element = {<AddRepairComponent/>} ></Route>
      <Route path="/edit-repair/:id" element={<AddRepairComponent/>}></Route>
      <Route path = "/customers" element = {<ListCustomerComponent/>}></Route>
      <Route path = "/add-customer" element = {<AddCustomerComponent/>} ></Route>
      <Route path="/edit-customer/:id" element={<AddCustomerComponent/>}></Route>
      <Route path = "/devices" element = {<ListDeviceComponent/>}></Route>
      <Route path = "/add-device" element = {<AddDeviceComponent/>} ></Route>
      <Route path="/edit-device/:id" element={<AddDeviceComponent/>}></Route>
      <Route path="/Customer_bking_rendered/:id" element={<Customer_bking_rendered/>}></Route>
      <Route path="/ComplainForm" element={<ComplainForm/>}></Route>
      
      <Route path="/AboutUs" element= { <AboutUs/>}  />
      <Route path="/register" element= { <Register/>}  /> 
      <Route path="/login" element= { <Login/>} />
      <Route path="/Admin_login" element={<Admin_Login/>}></Route>
      <Route path="/addorder/:customerId/:deviceId" element={<AddOrderComponent/>}></Route>
<<<<<<< Updated upstream
      <Route path = "/devices_2" element = {<ListDeviceComponent_2/>}></Route>
      <Route path = "/Customer_help" element = {<Customer_help/>}></Route>
=======
      <Route  path="/assign-repair-id/:id" element={<AssignRepairIdComponent/>} />
      <Route path="/employee-repairs" element={<ListEmployeeRepair/>}/>
      
>>>>>>> Stashed changes
    </Routes>
    
 
     
    </Router>
   </div>
  );
}

export default App;