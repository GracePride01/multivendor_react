import React from 'react';
import SideMnu from "../components/SideMnu";
import '../components/footer.css';
import AdminNavbar from './ad_top_nav';
import './Dashboard.css';
import AdHome from './AdHome';

const Dashboard = () => {
return (
	<div>
        <AdminNavbar></AdminNavbar>
        <SideMnu></SideMnu>
        <div className='container-home'>
        <AdHome />
        </div>
        <div class="ad_foot">
		  	  2022 Copy Rights @ CITS
	      </div>
    </div>
);
};
export default Dashboard;