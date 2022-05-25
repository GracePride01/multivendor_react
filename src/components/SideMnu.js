import {React,useEffect,useState} from 'react';

import './SideMnu.css';


const SideMnu = () => {
    const [inactive,SetInactive]=useState(false);
return (
	<div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div className='logo'>
                <img src={require("../pages/images/light-logo.png")} alt=""/>
           </div>
            <div onClick={() =>{
               SetInactive(!inactive)}}
               className='toggle-menu-btn'>
               {inactive ?(
                   <i class="bi bi-arrow-right-square-fill" style={{color:'#000'}} ></i>
                 ):(
                    <i class="bi bi-arrow-left-square-fill" style={{color:'#fff', fontWeight:'bold'}}></i>
                 )}
               
            </div>
        </div>
        {/* <div className="search-controller">
            <button className="search-btn1">
                <i class="bi bi-search"></i>
            </button>

            <input type="text" placeholder="search" />
        </div> */}
        {/* <div className="divider"></div> */}
                    <div className='main-menu'>
                        <ul>

                             <li>
                                <a className='menu-item'>
                                    <div className="menu-icon">
                                        <i class="bi bi-columns-gap"></i>
                                    </div>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            
                            <div className="divider"></div>
                            <li>
                                <a className='menu-item'>
                                    <div className="menu-icon">
                                        <i class="bi bi-stack"></i>
                                    </div>
                                    <span>Product</span>
                                </a>
                                <ul className='sub-menu'>
                                    <li>
                                        <a>
                                           Add Product 
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            View Product 
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <a className='menu-item'>
                                    <div className="menu-icon">
                                        <i class="bi bi-people-fill"></i>
                                    </div>
                                    <span>Users</span>
                                </a>
                                <ul className='sub-menu'>
                                    <li>
                                        <a>
                                           Add Users
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            View Users 
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <a className='menu-item'>
                                    <div className="menu-icon">
                                        <i class="bi bi-people"></i>
                                    </div>
                                    <span>Customers</span>
                                </a>
                                <ul className='sub-menu'>
 
                                    <li>
                                        <a>
                                            View Customer 
                                        </a>
                                    </li>
                                </ul>

                            </li>
                            <div className="divider"></div> 
                         </ul>
                    </div>
                <div className='side-menu-footer'>
                    <div className='avatar'>
                        <img src={require("../pages/images/user.png")} alt=""></img>
                    </div>
                    <div className='user-info'>
                        <h5>username</h5>
                        <p>usermail Id</p>
                    </div>
                </div>
	</div>
);
};
export default SideMnu;