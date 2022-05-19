import React from 'react';
import './SideMnu.css';

const SideMnu = () => {
return (
	<div className='side-menu inactive'>
        <div className='top-section'>
            <div className='logo'>
                <img src={require("../pages/images/light-logo.png")} alt=""/>
.           </div>
            <div className='toggle-menu-btn'>
            <i class="bi bi-arrow-left-square-fill"></i>
            </div>
        </div>
        <div className="search-controller">
            <button className="search-btn1">
                <i class="bi bi-search"></i>
            </button>

            <input type="text" placeholder="search" />
        </div>
        <div className="divider"></div>
    
	</div>
);
};
export default SideMnu;