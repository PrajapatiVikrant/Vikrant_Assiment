import React from "react";
import WebsiteContent from "../Alldata/WebsiteContent";
import BigCard from "./BigCard";
import './MainCtn.css'
import NavSecond from "./NavSecond";
import SecondCard from "./SecondCard";
import Signup from "./Signup";
function MainCtn() {

    return (
        <div className="mainBody">
           
            
            <div className="mainInnerCtn">
                <div className="SmallIntro">
                    <h1 className="firstheading">Best Website builders in the US</h1>
                </div>
                <NavSecond />
                {WebsiteContent.CardData.map((elem) => {
                    return <BigCard
                        url={elem.url}
                        heading1={elem.heading1}
                        heading2={elem.heading2}
                        paragraph1={elem.paragraph1}
                        paragraph2={elem.paragraph2}
                        rateNO={elem.rateNO}
                        rateText={elem.rateText} />
                })}
                <br />
                <br /><br /><br />
                <h2 className="h2">Related deals you might like for</h2>
                <div className="secondcardctn">
                    {WebsiteContent.secondCard.map((elem) => {
                        return <SecondCard
                            url={elem.url}
                            offer1={elem.offer1}
                            offer2={elem.offer2}
                            heading={elem.heading}
                            paragraph={elem.paragraph}
                            para2={elem.para2}
                            price1={elem.price1}
                            price2={elem.price2} />
                    })}
                </div>
                <Signup/>

            </div>
            
        </div>
    )
}
export default MainCtn;