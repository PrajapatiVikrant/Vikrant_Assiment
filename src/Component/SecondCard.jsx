import React from "react";
import "./SecondCard.css"
function SecondCard(props) {
    return (
        <>
       
        <br /><br />
        <div className="Secondcard">
            <div>
                <center>
                <img className="secondimg" src={props.url} alt="" />
                </center>
                <br /><br />
                <div className="innercardNav">
                    <div className="innerNavItem">{props.offer1}</div>
                    <div className="innerNavItem">{props.offer2}</div>
                </div>
                <center><h3 className="h3">{props.heading}</h3></center>
                <div className="smalltext">{props.paragraph}<br /> {props.para2}</div>
                <div className="priceCtn">
                    <div className="price1">{props.price1}</div>
                    <div className="price2">{props.price2}</div>
                </div>
            </div>
            <center>
            <button className="views2">views</button>
            </center>
           



        </div>
        </>
    )
}
export default SecondCard;