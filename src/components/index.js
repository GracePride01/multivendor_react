import {useEffect ,React,useState} from 'react';
import './nav.css';
import './footer.css';
import {useHistory} from "react-router-dom";
import { Sidenav, Nav, Dropdown, Toggle } from 'rsuite';
import { GearCircle, Group, Magic, Dashboard } from '@rsuite/icons';

function Navbar  ()  {
	
// side nav
	const [expanded, setExpanded] = React.useState(true);
	const [activeKey, setActiveKey] = React.useState('1');
// side nav end
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

		{/* side nav */}
		<div style={{ width: 240 }}>
			<Toggle
				onChange={setExpanded}
				checked={expanded}
				checkedChildren="Expand"
				unCheckedChildren="Collapse"
			/>
			<hr />
			<Sidenav
				expanded={expanded}
				defaultOpenKeys={['3', '4']}
				activeKey={activeKey}
				onSelect={setActiveKey}
			>
				<Sidenav.Body>
				<Nav>
					<Nav.Item eventKey="1" icon={<Dashboard />}>
					Dashboard
					</Nav.Item>
					<Nav.Item eventKey="2" icon={<Group />}>
					User Group
					</Nav.Item>
					<Dropdown placement="rightStart" eventKey="3" title="Advanced" icon={<Magic />}>
					<Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
					<Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
					<Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
					<Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
					</Dropdown>
					<Dropdown placement="rightStart" eventKey="4" title="Settings" icon={<GearCircle />}>
					<Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
					<Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
					<Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
					<Dropdown.Menu eventKey="4-5" title="Custom Action">
						<Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
						<Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
					</Dropdown.Menu>
					</Dropdown>
				</Nav>
				</Sidenav.Body>
			</Sidenav>
			</div>
	
		{/* side nav  end*/}
	
		</>

	);};

export default Navbar;
