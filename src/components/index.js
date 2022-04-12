import {useEffect ,React,useState} from 'react';



// import {
// Nav,
// NavLink,
// NavMenu,
// NavBtn,
// NavBtn1,
// NavBtnLink,
// } from './NavbarElements';
// import {  Box  } from "./FooterStyles";
import './nav.css';
import './footer.css';

const Navbar = () => {
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
		<ul class="links-container navbar1">
			<li class="link-item"><a href="/" class="link">home</a></li>
			<li class="link-item"><a href="#" class="link">women</a></li>
			<li class="link-item"><a href="#" class="link">men</a></li>
			<li class="link-item"><a href="#" class="link">kids</a></li>
			<li class="link-item"><a href="#" class="link">accessories</a></li>
		</ul>

	</nav>


	{/* <Nav style={{
                   marginTop: "0 px"  }}>

		<NavMenu> */}
		{/* <NavLink to='/about' activeStyle>
			About
		</NavLink> */}
		{/* <NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink> */}
		{/* <NavLink to='search' activeStyle>
            
                <input type="text"
					class="search_bar"
					placeholder=" Search "
                    name="search" />
    
        </NavLink>
		<NavLink to='/events' activeStyle>
			Returns & Orders
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Cart
		</NavLink>
		<NavBtn style={{ float : 'right'}}>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn>
		<NavBtn1 
		style={{ float : 'right'}}>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn1>

		</NavMenu>
		
	</Nav> */}
	
	</>

);};

export default Navbar;
