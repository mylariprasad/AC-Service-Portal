// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListRepairComponent from './components/ListRepairComponent';
import AddRepairComponent from './components/AddRepairComponent';
import Sidebar from './components/Sidebar';
import AdminMainPage from './components/AdminMainPage';
import Home from './pages/home/Home.js'
import AddCustomerComponent from './components/AddCustomerComponent';
import ListCustomerComponent from './components/ListCustomerComponent';

function App() {
  return (
   <div>
    <Router>
    <HeaderComponent/>
    <Sidebar></Sidebar>
    <Routes>
    <Route path="/" element={<Home/>}> 
      </Route>
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
      </Routes>
    
 
    <FooterComponent/>
    </Router>
   </div>
  );
}

export default App;
