import React from "react";
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <div className="container">           
            <nav className="navbar navbar-default">
                <div className="container-fluid">                   
                    <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/details">Register Details</NavLink></li>                
                    </ul>              
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;