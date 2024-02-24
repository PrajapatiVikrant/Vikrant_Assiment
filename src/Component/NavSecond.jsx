import React from "react";
import rightIcon from "../assets/rightIcon.svg"
import infoIcon from "../assets/infoIcon.svg"
import downArrow from "../assets/downArrow.svg"
import "./NavSecond.css"
function NavSecond() {
    return (
        <div className="navSecondCtn">
            <br />
            <hr />
            <div className="navSecond">
                <div className="itemPart1">
                    <div className="navSecItem">
                        <img className="iconCtn" src={rightIcon} alt="rightIcon" />
                        <div className="navsectext">Last Updated - February 22, 2020</div>
                    </div>
                    <div className="navSecItem">
                        <img className="iconCtn" src={infoIcon} />
                        <div className="navsectext">Advertising Disclosure</div>
                    </div>
                </div>
                <div className="itemPart2">
                    <div className="navsectext">Top Relevant</div>
                    <img src={downArrow} alt="icon" className="iconCtn" />
                </div>
            </div>
            <hr />
            <div className="thirdNav">
                <div className="thirdNavItem">Tools</div>
                <div className="thirdNavItem">AWS Builder</div>
                <div className="thirdNavItem">Start Build</div>
                <div className="thirdNavItem">Build Supplies</div>
                <div className="thirdNavItem">Tooling</div>
                <div className="thirdNavItem">BlueHosting</div>
            </div>
            <div>
                <marquee className="thirdNavMobile" behavior="scroll" direction="left" scrollamount="5">
                    <div className="thirdNavItem">Tools</div>
                    <div className="thirdNavItem">AWS Builder</div>
                    <div className="thirdNavItem">Start Build</div>
                    <div className="thirdNavItem">Build Supplies</div>
                    <div className="thirdNavItem">Tooling</div>
                    <div className="thirdNavItem">BlueHosting</div>
                </marquee>

            </div>
            <div className="lastNav">
                <div className="lastnavitem">Home</div>
                <div className="lastnavitem arrowitem">></div>
                <div className="lastnavitem">Hosting for all</div>
                <div className="lastnavitem arrowitem">></div>
                <div className="lastnavitem">Hosting</div>
                <div className="lastnavitem arrowitem">></div>
                <div className="lastnavitem">Hosting6</div>
                <div className="lastnavitem arrowitem">></div>
                <div className="lastnavitem">Hosting5</div>
            </div>
        </div>
    )
}
export default NavSecond;