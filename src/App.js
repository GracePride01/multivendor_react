import {React} from 'react';
import Navbar from './components';
import AdminNavbar from './Admin/ad_top_nav';
import SideMnu from './components/SideMnu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
import Blogs from './pages/blog';
import SignUp from './pages/signup';
import Login from './pages/login';
import Products from './pages/product';
import Addproduct from './pages/add_product';
import Seller from './pages/seller';
import ManageProduct from './pages/manage_product';
import Dashboard from './Admin/Dashboard';
import UserList from './Admin/Ad_pages/userList/UserList';
import CustomerList from './Admin/Ad_pages/customerList/CustomerList';
import Cart from './pages/cart';
import VendorDash from './Vendor/Vendor_dash';
function App() {
return (
	<Router>
		
		
		<Switch>
			<Route path='/' exact component={Home}></Route>
			<Route path='/about' component={About}></Route>
			{/* <Route path='/events' component={Events} />
			<Route path='/annual' component={AnnualReport} /> */}
			{/* <Route path='/team' component={Teams} /> */}
			<Route path='/blog' component={Blogs}></Route>
			<Route path='/signup' component={SignUp}></Route>
			<Route path='/login' component={Login}></Route>
			<Route path='/products' component ={Products} ></Route>
			<Route path='/add_product'component={Addproduct} ></Route>
			<Route path='/seller' component={Seller}></Route>
			<Route path='/manage_product' component={ManageProduct}></Route>
			<Route path='/Dashboard' component={Dashboard}></Route>
			<Route path='/userlist' >
				<AdminNavbar></AdminNavbar>
				<SideMnu></SideMnu>
				<div className='container-home'>
					<UserList />
				</div>
				<div class="ad_foot">
					2022 Copy Rights @ CITS
				</div>
			</Route>
			<Route path='/customerlist' >
				<AdminNavbar></AdminNavbar>
				<SideMnu></SideMnu>
				<div className='container-home'>
					<CustomerList />
				</div>
				<div class="ad_foot">
					2022 Copy Rights @ CITS
				</div>
			</Route>
			<Route path='/cart'component={Cart} ></Route>
			<Route path='/Vendor_dash' component={VendorDash}></Route>


		</Switch>
		
	</Router>
);
}

export default App;
