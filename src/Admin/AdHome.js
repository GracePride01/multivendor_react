import React from 'react';
import './AdHome.css';
import FeaturedInfo from './featuredInfo/FeaturedInfo';
import Chart from './chart/Chart';
import {userData} from "../../src/dummyData";
import Wsmall from './widgetSm/widgetSm';
import Wlarge from './widgetLg/widgetLg';



export default function AdHome(){
    return(
        <div className='ad-home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="ad-homeWidgets">
                <Wlarge />
                <Wsmall />
            </div>
        </div>
    )
}