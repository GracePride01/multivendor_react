import React from 'react';
import VendorSideMnu from "../components/VendorSideMnu";
import '../components/footer.css';
import VendorNavbar from './vendor_top_nav';
import './Vendor_dash.css';
import VendorHome from './VendorHome';

const VendorDash = () => {
return (
	<div>
        <VendorNavbar></VendorNavbar>
        <VendorSideMnu></VendorSideMnu>
        <div className='container-home'>
        <VendorHome />
        </div>
        <div class="ad_foot">
		  	  2022 Copy Rights @ CITS
	      </div>
    </div>
);
};
export default VendorDash;