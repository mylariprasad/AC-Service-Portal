import {  useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/login", {
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
       <div>
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>

             <div class="row">
             <div class="col-sm-6">
 
            <form>
        <div class="form-group">
          <label>Email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Name"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />

        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>

            </div>
            </div>
            </div>

     </div>
    );
  }
  
  export default Login;