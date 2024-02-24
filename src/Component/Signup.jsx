import React from "react";
import "./Signup.css"
function Signup(){
    return (
        <>
        <br /><br /><br />
        <div className="signupCtn">
        <div className="signupMessage">Sign up and get <br /><br /> exclusive special deals</div>
        <div className="signupInput">
            <input type="text" className="signuInput"/>
            <button className="signup">Sign Up</button>
        </div>
        </div>
        <br />
        </>
    )
}
export default Signup;