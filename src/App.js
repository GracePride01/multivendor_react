import React from 'react';
import Navbar from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
//import Teams from './pages/team';
import Blogs from './pages/blog';
import SignUp from './pages/signup';
import Login from './pages/login';
import Products from './pages/product';
import add_product from './pages/add_product';


function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		{/* <Route path='/team' component={Teams} /> */}
		<Route path='/blog' component={Blogs} />
		<Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
	<Route path='/products' component ={Products}></Route>
	<Route path='/add_product'component={add_product}></Route>
	</Switch>
	<footer>
	
       
	2022 Copy Rights @ CITS
  

</footer>
	</Router>
);
}

export default App;