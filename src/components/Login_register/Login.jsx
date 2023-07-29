import {  useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../../css/LoginRegister.css';


function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/custmlogin/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message === "Login Success")
             { 
              const customerEmail = res.data.email;
              console.log(customerEmail);
                // Get customer ID using customerEmail
                axios.get(`http://localhost:8080/customers/email/${customerEmail}`)
                  .then((response) => {
                    const customerId = response.data.id;
                    // Use the customer ID as needed
                    console.log(customerId);
                    navigate(`/Customer_bking_rendered/${customerId}`);
                  })
                  .catch((error) => {
                    console.error('Error fetching customer ID:', error);
                    alert("Error occurred while fetching customer ID");
                  });
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

    return (
      <div className="App">
      <div className="auth-form-container">
            <h2 className="heading">Login</h2>
        <form className="loginform">
            <label htmlFor="email">Email</label> 
            <input className="input-field" type="email" placeholder="example@gmail.com" id="email" 
                  value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input className="input-field" type="password" placeholder="********" id="password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
            />
  
            <button className="main-button" type="submit" onClick={login}>Login</button>
        </form>
        <button className="Link-btn" onClick={()=>navigate('/add-customer')}>Don't have account? Register here(2 step registration)</button>
      </div>
      </div>
    );
  }
  
  export default Login;