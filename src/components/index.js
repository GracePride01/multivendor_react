import {React,useState} from 'react';
import './nav.css';
import './footer.css';
import {useHistory} from "react-router-dom";


function Navbar  ()  {
	

	var style = {};
	var style1 = {};
	var uname = sessionStorage.getItem('username');
	let navigate = useHistory();
	const routeChange=()=>{
		navigate.push("/login");
		setshow(!show)
	}
	const log=()=>{
		navigate.push("/");
		setshow(!show);
		sessionStorage.removeItem("username");
	}

	if(uname === null){
		style.display = 'block';
		style1.display = 'none';
		uname = "Please Login";
	}else{
		style.display = 'none';
		style1.display = 'block';
	}
	
	const [show,setshow]=useState(false);
	return (
		<>
		<nav class="navbar">
			<div class="nav">
				<img src={require("../pages/images/dark-logo.png")} class="brand-logo" alt=""/>
				<div class="nav-items">
					<div class="search">
						<input type="text" class="search-box" placeholder="search brand, product" 	/>
						<button  class="search-btn">search</button>
					</div>
					<a>
						<img onClick={()=>setshow(!show)} src={require("../pages/images/user.png")} id="userimg" alt=""/>
						{
							show?<div class="login-logout-popup">
							<p class="account-info">Hello,{uname}</p>


						
						
							
							{/* <a href="/login" > */}
								<button style={style}  type="submit" onClick={routeChange} class="btn" id="user-btn">Sign In</button>
								{/* </a> */}
							
							
						<ul class="popup">
							<br/>
						<hr style={style1} class="divider"></hr>
							<li style={style1}><a class="popup_a bold"  href="#">My Account</a></li>
							<hr style={style1} class="divider"></hr>
							
							
							
							<li style={style1}><a class="popup_a bold" href="#">My orders</a></li>
							<hr style={style1} class="divider"></hr>
	
							<li style={style1}><a  class="popup_a bold" href="/">Wish list</a></li>
							<hr style={style1} class="divider"></hr>

							<li style={style1}><button  type="submit" onClick={log} class="btn" id="user-btn">Logout</button></li>

						</ul>
					
						</div>:null
						}
					</a>
					<a href="#"><img src={require("../pages/images/cart.png")} alt=""/></a>
				</div>
			</div>

			
			
			<ul class="links-container navbar1">
				<li class="link-item"><a href="/" class="link">home</a></li>
				<li class="link-item"><a href="/event" class="link">women</a></li>
				<li class="link-item"><a href="/annual" class="link">men</a></li>
				<li class="link-item"><a href="/blog" class="link">kids</a></li>
				<li class="link-item"><a href="#" class="link">accessories</a></li>
			</ul>


		</nav>

		
		</>

	);};

export default Navbar;
