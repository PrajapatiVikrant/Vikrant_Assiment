import React from "react";
import "./Signup.css"
function Signup(){
    return (
        <>
        <br /><br /><br />
        <div className="signupCtn">
        <p className="signupMessage">Sign up and get <p className="break">exclusive special deals</p> </p>
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