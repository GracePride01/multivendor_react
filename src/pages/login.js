import './login.css';
import { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock,} from "@fortawesome/free-solid-svg-icons";
import { ReactSession } from 'react-client-session';


function Login() {
  let navigate = useHistory();

 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: "http://localhost/mv_php/sign.php?&password="+pass+"&email="+email
  })
  .then(function (response) {
        if (response.status === 200) {
            console.log(response.data)
            showAlert("Logged In Successfully...");
            sessionStorage.setItem("username", response.data.username);
	        	navigate.push("/");

            console.log(sessionStorage.getItem('username'));

        } 
        else {
          setMessage("Some error occured");
        }
    

  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });
}

  const showAlert = (msg) => {
		let alertBox = document.querySelector('.alert-box');
		let alertMsg = document.querySelector('.alert-msg');
		alertMsg.innerHTML = msg;
		alertBox.classList.add('show');
		setTimeout(() => {
			alertBox.classList.remove('show');
		}, 3000);
	}
	
	



  return (
    <div style={{
      marginTop:'50px'
    }}>
 
      <div class="container" >
        
      <h1 class="su_li" >Log In</h1>
      
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 ">Email Id: </label>
            <FontAwesomeIcon icon={faEnvelope}/>
                <div className="col-sm-4">
                    <input
                      class="text_pass"
                      type="text"
                      value={email}
                      placeholder=" Email Id"
                      onChange={(e) => setEmail(e.target.value)}
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
          <br></br>
          <a href="/signup" class="link">New Customer? Start here</a>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        
          <div class="alert-box">
			<img src={require("./images/error-icon.ico")} class="alert-img" alt=""/>
			<p class="alert-msg">Error message</p>
		</div>
        </form>
      </div>
    <br></br>
    <br></br>
 
    </div>
  
  );
}

export default Login;
