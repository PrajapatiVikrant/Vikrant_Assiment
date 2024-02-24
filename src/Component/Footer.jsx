import React from "react";
import downArrow from "../assets/downArrow.svg"
import "./Footer.css"
function Footer(){
    return (
        <div className="footerctn">
            <div className="footer">
                <div className="footerItem">
                     <div className="fheading">Categories</div>
                     <div className="fitem">Web Builder</div>
                     <div className="fitem">Hosting</div>
                     <div className="fitem">Data Center</div>
                     <div className="fitem">Robotic-Automation</div>
                </div>
                <div className="footerItem">
               
                     <div className="f2heading">Contact</div>
                     <div className="fitem">Contact</div>
                     <div className="fitem">Privacy Policy</div>
                     <div className="fitem">Terms Of Service</div>
                     <div className="fitem">Categories</div>
                     <div className="fitem">About</div>
                </div>
                <div className="footerItemIcon">
                      <div className="fitem">United State</div>
                      <img src={downArrow} alt="arrow" className="fitem" />
                </div>
            </div>
        </div>
    )
}
export default Footer;