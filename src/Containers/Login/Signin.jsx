import React, { useState } from "react";
import "../../styles/signin.scss";
import { Signup } from "./Signup";
import { Login } from "./Login";

export const Signin = () => {
	const [signUp, setSignUp] = useState(false);

	return (
		<div className="signinScreen">
			{/* <div className="login__bkg"> */}
			{/* <img className="loginScreen__logo" src={net__logo} alt="" /> */}
			{!signUp && <Login setSignUp={setSignUp} />}
			<div />

			{signUp && <Signup setSignUp={setSignUp} />}
		</div>
		// </div>
	);
};
