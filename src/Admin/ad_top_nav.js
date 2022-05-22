import {React,useState} from 'react';

import '../components/nav.css';
import '../components/footer.css';

const AdminNavbar = () => {
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
						<p class="account-info">Log in as, name</p>
						<button class="btn" id="user-btn" >Log Out</button>
					</div>:null
					}
				</a>
				<a href="#"><img src={require("../pages/images/cart.png")} alt=""/></a>
			</div>
		</div>
		
	</nav>

	</>

);};

export default AdminNavbar;
