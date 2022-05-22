import {useEffect ,React} from 'react';
import { useState } from "react";
import Navbar from '../components/index';
import '../components/footer.css';
import axios from "axios";
import {faUser, faLock, faEnvelope,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  let showAlert = (msg) => {
	let alertBox = document.querySelector('.alert-box');
	let alertMsg = document.querySelector('.alert-msg');
	alertMsg.innerHTML = msg;
	alertBox.classList.add('show');
	setTimeout(() => {
		alertBox.classList.remove('show');
	}, 3000);
}
  let handleSubmit = async (e) => {
    e.preventDefault();
 
        axios({
            method: 'post',
            url: "http://localhost/mv_php/register.php?username="+name+"&password="+pass+"&email="+email
        })
        .then(function (response) {
              if (response.status === 200) {
				  if(response.data==="s"){
					  
					setName("");
					setPass("");
					setEmail("");
					setMessage(response.data);
					showAlert("Account Created Successfully...");

				  }
				  else{
					  
					setName("");
					setPass("");
					setEmail("");
					setMessage(response.data);
					showAlert("Error...");

				  }
					
				} 
				else {
					setMessage("Some error occured");
				}
			console.log(response)

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });

	}

	  useEffect(() => { 
		const submitBtn = document.querySelector('.btn_sign_up');
		const name = document.querySelector('#name');
		const email = document.querySelector('#email');
		const password = document.querySelector('#password');
		//const number = document.querySelector('#number');
		const tac = document.querySelector('#terms-and-cond');
		
		
		submitBtn.addEventListener('click', () => {
			if(name.value.length < 3){
				showAlert('Name must have more than 3 characters');
			}
			else if(!name.value.length) {
				showAlert(' Name should not be empty')
			}
			else if(!email.value.length) {
				showAlert(' Email should not be empty')
			}
			else if(password.value.length < 8){
				showAlert('Password should be 8 letters long');
			} 
			else if(!password.value.length){
				showAlert('Password should not be empty');
			}
			// else if(!number.value.length){
			// 	showAlert('enter your phone number');
			// } 
			// else if(!Number(number.value) || number.value.length < 10){
			// 	showAlert('invalid number, please enter valid one');
			// }
			else if(!tac.checked){
				showAlert('You must agree to our terms and conditions');
			} 
			else{
				// submit form
				
				handleSubmit();
				
			}
	})
	
	
	});

	return (
	<div style={{
		marginTop:'50px'
	}}>
	<Navbar />
		<div class="container" >
		
		<h1 class="su_li" >Sign Up</h1>
		
		<form onSubmit={handleSubmit}>
		<div className="form-group row">
		<label className="col-sm-2 ">User Name: </label>
		<FontAwesomeIcon icon={faUser}/>
			<div className="col-sm-4">
				<input
				    class="text_pass"
					type="text"
					id='name'
					required
					value={name}
					placeholder=" User Name"
					onChange={(e) => setName(e.target.value)}
				/>
				</div>
			</div>

		<div className="form-group row">
			<label className="col-sm-3 ">Email: </label>
			<FontAwesomeIcon icon={faEnvelope}/>
				<div className="col-sm-4">
				<input
				    class="text_pass"
					type="text"
					id='email'
					required
					value={email}
					placeholder="Email"
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
					id='password'
					value={pass}
					placeholder="Password"
					onChange={(e) => setPass(e.target.value)}
				/>
				</div>
		<input type="checkbox"  class="checkbox" id="terms-and-cond"/>
		<label for="terms-and-cond">agree to our <a href="">terms and conditions</a></label>
				<br></br>

		</div>
		<div className="form-group row">
					
			<input type="submit"  class="btn_sign_up " value="Create Account" />
		</div>
		<br></br>
		<a href="/login" class="link">Already have an account? Log in here</a>
		<div className="message">{message ? <p>{message}</p> : null}</div>

		<div class="alert-box">
			<img src={require("./images/error-icon.ico")} class="alert-img" alt=""/>
			<p class="alert-msg">Error message</p>
		</div>

		</form>
		</div>
		<br></br>
		<br></br>
		<br></br>
		<footer>
			2022 Copy Rights @ CITS
		</footer>
	</div>
	);
};


export default SignUp;
