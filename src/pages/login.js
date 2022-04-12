import './login.css';
import { useState } from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock,} from "@fortawesome/free-solid-svg-icons";

function Login() {


  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
 
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/auth/signin/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: name,
          password: pass
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setPass("");
        setMessage(resJson.username);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
 
    <div class="container" >
       
    <h1 class="su_li" >Log In</h1>
    
    <form onSubmit={handleSubmit}>
    <div className="form-group row">
      <label className="col-sm-2 ">User Name: </label>
      <FontAwesomeIcon icon={faUser}/>
          <div className="col-sm-4">
              <input
                class="text_pass"
                type="text"
                value={name}
                placeholder=" User Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
        </div>
      <div className="form-group row">
        <label className="col-sm-3 ">Password: </label>
        <FontAwesomeIcon icon={faLock}/>
            <div className="col-sm-4">
              <input
                class="text_pass"
                type="password"
                value={pass}
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group row">
                
            <input type="submit"  class="btn_sign_up" value="Log In" />
           </div>
           
      </div>

     
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
    <br></br>
    <br></br>
   


  </div>
  
  );
}

export default Login;
