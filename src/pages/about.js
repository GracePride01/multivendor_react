import React from 'react';
import Navbar from '../components/index';
import '../components/footer.css';
const About = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Right',
		marginTop:'50px'
	}}
	>
	<Navbar />
	<h1>About</h1>
	<footer>
			2022 Copy Rights @ CITS
	</footer>
	</div>
);
};

export default About;
