import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () =>{
    return(
        <div className="container">  
             <div className="row">
                <div className="col-sm-12 col-xs-12">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/details">Register Details</NavLink></li>                
                            </ul>                              
                </div>
               
            </div>         
        </div>
    );
}

export default Navigation;