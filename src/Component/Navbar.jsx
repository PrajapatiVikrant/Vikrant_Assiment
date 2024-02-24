import React from "react";
import SearchIcon from "../assets/SearchIcon.svg"
import "./Navbar.css";
function Navbar(){
    return (
        <div className="navCtn">
            <div className="nav">
                <div className="searchCtn">
                <img src={SearchIcon} alt="icon" className="SearchIcon" />
                <input type="text"  className="search" />
                </div>
            
            <div className="navItem">Categories</div>
            <div className="navItem">Website Builders</div>
            <div className="navItem">Today's deals</div>
            </div>
        </div>
    )
}
export default Navbar;