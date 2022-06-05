import React from 'react';
import './featuredInfo.css';
import '../Dashboard.css';
export default function FeaturedInfo(){
    return(
        <div className='featured'>
            <div className='featuredItem'>
                <span className="featuredTitle">Revenue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$5,823</span>
                    <span className='featuredMoneyRate'>
                    -11.4<i class=" featuredIcon negative bi bi-arrow-down"></i>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>

            <div className='featuredItem'>
                <span className="featuredTitle">Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$5,823</span>
                    <span className='featuredMoneyRate'>
                        -11.4<i class="featuredIcon negative bi bi-arrow-down"></i>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>

            <div className='featuredItem'>
                <span className="featuredTitle">Expance</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$5,823</span>
                    <span className='featuredMoneyRate'>
                        1.4<i class=" featuredIcon bi bi-arrow-up"></i>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    )
}