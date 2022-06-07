import React from 'react';
import './VendorHome.css';
// import FeaturedInfo from './featuredInfo/FeaturedInfo';
// import Chart from './chart/Chart';
// import {userData} from "../../src/dummyData";
// import Wsmall from './widgetSm/widgetSm';
// import Wlarge from './widgetLg/widgetLg';



export default function VendorHome(){
    return(
        <div className='ad-home'>
            <center>
            <h1 class="hd-vw" >Vendor Dashboard</h1>
            <br></br>
            </center>
            {/* <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="ad-homeWidgets">
                <Wsmall />
                <Wlarge />
                 
            </div>*/}
        </div>
    )
}