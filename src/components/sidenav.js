import React from 'react';
import './sidenav.css';

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


function Sidenav ()  {
return (
    <>
	<div class="bdy_sidenav">
        <div id="mySidenav" class="sidenav">
            <a href={void(0)} class="closebtn" onclick={closeNav()}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>

            <div id="main">
            <h2>Sidenav Push Example</h2>
            <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
            <span style="font-size:30px;cursor:pointer" onclick={openNav()}>&#9776; open</span>
        </div>
       

	</div>
    </>
);
};
export default Sidenav;