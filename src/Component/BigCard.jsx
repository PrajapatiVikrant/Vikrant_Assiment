import React from "react";
import "./BigCard.css"
function BigCard(props) {
    return (
        <div className="CardCtn">

            <img className="cardimg" src={props.url} alt="" />
            <div className="flexItem flextitem1">
                <div className="part1">
                    <div className="cardText">
                        <h2 className="smallheading">{props.heading1}</h2>
                       {props.paragraph1}
                    </div>
                </div>
                <div className="part2">
                    <h2>{props.heading2}</h2>
                    <div className="part2para">{props.paragraph2}</div>
                </div>
                <div className="showmore">show more <div className="arrowIcon">^</div></div>
            </div>
            <div className="flexItem flextitem2">
                <div class="rating-card">
                    <div class="rate">{props.rateNO}</div>
                    <div class="text">{props.rateText}</div>
                    <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
                <button className="views">views</button>
            </div>
        </div>
    )
}
export default BigCard;