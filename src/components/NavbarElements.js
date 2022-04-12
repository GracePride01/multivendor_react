import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
height: 50px;
margin-top: 0 px;

`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
margin-left:65px;
padding: 5px;
height: 100%;
font-weight:bold;
font-size:16.9px;
cursor: pointer;
&.active {
	color: black;
}
`;



export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
top:0 px;
align-items: center;
position: fixed;
background: #bf3e11;
width:100%;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
align-items: center;
width:auto;
margin-left:20px;
padding:20px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn1 = styled.nav`
align-items: center;
width:auto;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #f2f2f2;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

margin-left: 4px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: black;
	font-weight: bold;
}
`;


