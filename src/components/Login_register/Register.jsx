import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../../css/AdminLogin.css';

function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/custmlogin/save", {
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registation Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
      <div className="App">
      <div className="auth-form-container">
        <h1 className="heading">Registration (2nd Step)</h1>
        <form className="registerform">
          <label>User Name</label>
          <input
            className="input-field"
            type="text"
            id="employeename"
            placeholder="Enter Name"
            value={employeename}
            onChange={(event) => {
             setEmployeename(event.target.value);
            }}
            required
          />

          <label>Email</label>
          <input
            className="input-field"
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />

          <label>Password</label>
          <input
            className="input-field"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />

          <button className="main-button" type="submit" onClick={save}>Submit</button>
        </form>
        <button className="Link-btn" onClick={()=>navigate('/login')}>
          Already have an account? Now Login here
        </button>
      </div>
    </div>
    );
  }
  
  export default Register;