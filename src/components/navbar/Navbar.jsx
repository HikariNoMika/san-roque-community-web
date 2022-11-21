
import "./navbar.scss";
import Logo from '../../images/img.jpg'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
       const [active,setActive] = useState(false);


       const handleClick = () => setActive(!active);
       const handleClose = () => setActive(false);
    
        const style = {
            textDecoration:"none",
            color:"inherit"
            
        }

    return (
        <div className="navbar">

            <div className="logo">
             
                <img src={Logo} alt='img'></img>
                <div className="title">
                <NavLink to="/" style={style}>
                <h3>KAANYAG SAN ROQUE</h3>
                <p>Koronadal, South Cotabato</p>
                </NavLink>
                </div>
               
            </div>
           
            <div className={active? "menu-mobile" : "menu"} onClick = {()=>handleClick}>
                <div className="search">

                </div>
                <div className="lists">

                    <ul>
                    <li><span>
                        <NavLink to='/' className={({isActive}) => "nav-links" + (isActive ? " active" :"")} onClick={handleClose}>Home</NavLink></span></li>
                        
                        <li ><span><NavLink to='/officials'  className={({isActive}) => "nav-links" + (isActive ? " active" :"")}>About</NavLink></span></li>
                     
                        <li ><span><NavLink to='/officials'  className={({isActive}) => "nav-links" + (isActive ? " active" :"")}>Officials</NavLink></span></li>
                        <li ><span><NavLink to='/officials'  className={({isActive}) => "nav-links" + (isActive ? " active" :"")}>Puroks</NavLink></span></li>
                     
                    </ul>
                   
                </div>
            </div>
            
            <button onClick={handleClick} >{active? <FaTimes/> :<FaBars/>}</button>
           
        </div>
    )
}

export default Navbar