import React from 'react'
import './navbar.css'
import { ImHome } from "react-icons/im";

function Navbar() {
    return (
        <div className = "Navbar">
                <ul>
                    <div className="logo">
                <img className='displayed' src='logo.png'></img>
                </div>
                   <h4>AL-SIRAJ COMPUTER DESIGN</h4>
                   <li><ImHome color="black"/><a href="#Main Screen">Main Screen</a></li>
                   <li><ImHome color="black"/><a href="#Clients">Clients</a> 
                   <div className="sub-menu-1">
                       <ul>
                       <li><a href="#">Client Information</a>
                       <div className="sub-menu-2">
                         <ul>
                           <li><a href="/individualinfo">Individuals</a></li>
                           <li><a href="#">Institutions</a></li>
                         </ul>
                       </div>
                       </li>
                       <li><a href="#">Client Applications</a></li>
                       <li><a href="#">Client Properties</a></li>
                       <li><a href="#">Client Payments</a></li> 
                       </ul>
                   </div>
                   </li>
                   <li><ImHome color="black"/><a href="#Services">Services</a>
                   <div className='sub-menu-1'>
                     <ul>
                       <li><a href="#">Leasing Service</a></li>
                       <li><a href="#">Buying & Selling</a></li>
                       <li><a href="#">Maintenances</a></li>
                       <li><a href="#">Management</a></li>
                       <li><a href="#">Consulting Study</a></li>
                     </ul>
                   </div>
                   </li>
                   <li><ImHome color="black"/><a href="#Properties">Properties</a>
                   <div className='sub-menu-1'>
                     <ul>
                      <li><a href="#">Villas & Apartment</a></li>
                      <li><a href="#">Buying & Tower</a></li>
                      <li><a href="#">Warehouse&Shops</a></li>
                      <li><a href="#">Lands</a></li>
                      <li><a href="#">Forms</a></li>
                      <li><a href="#">Factories</a></li>
                     </ul>

                   </div>
                   </li>
                   <li><ImHome color="black"/><a href="#Employee">Employee</a></li>
                   <li><ImHome color="black"/><a href="#Settings">Settings</a></li>
                </ul>
                       
        </div>
        
    )
}
export default Navbar;