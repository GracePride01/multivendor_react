import React from 'react';
import SideMnu from "../components/SideMnu";
import '../components/footer.css';
import AdminNavbar from './ad_top_nav';
const Dashboard = () => {
return (
	<div>
        <AdminNavbar></AdminNavbar>
        <SideMnu></SideMnu>
        

        <div class="ad_foot">
			2022 Copy Rights @ CITS
	    </div>
    </div>
);
};
export default Dashboard;