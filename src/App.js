import React from 'react';
import Navbar from './components';
import { Sidenav, Nav, Dropdown } from 'rsuite';

import { ReactSession } from 'react-client-session';
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


function App() {
	ReactSession.setStoreType("localStorage");
return (
	<Router>
		<Navbar />
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/about' component={About} />
			{/* <Route path='/events' component={Events} />
			<Route path='/annual' component={AnnualReport} /> */}
			{/* <Route path='/team' component={Teams} /> */}
			<Route path='/blog' component={Blogs} />
			<Route path='/signup' component={SignUp} />
			<Route path='/login' component={Login} />
			<Route path='/products' component ={Products}></Route>
			<Route path='/add_product'component={Addproduct}></Route>
			<Route path='/seller' component={Seller}></Route>
			<Route path='/manage_product' component={ManageProduct}/>
			
		</Switch>
		<footer>
			2022 Copy Rights @ CITS
		</footer>
	</Router>
);
}

export default App;
