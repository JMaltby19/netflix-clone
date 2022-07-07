import React, { useState } from "react";
import "../styles/signin.scss";
import { Signup } from "./Signup";
import { Signin2 } from "./Signin2";

export const Sign = () => {
	// const [singinguest, setSinginguest] = useState(false);
	const [signUp, setSignUp] = useState(false);

	// const onSignin = (email, password) => {
	// 	signIn(email, password).then((result) => {
	// 		if (result === true) {
	// 			<Link to={"/"}></Link>;
	// 		} else {
	// 			setErrorMessage(result.error);
	// 		}
	// 	});
	// };

	return (
		<div className="signinScreen">
			{/* <div className="login__bkg"> */}
			{/* <img className="loginScreen__logo" src={net__logo} alt="" /> */}
			{!signUp && <Signin2 setSignUp={setSignUp} />}
			<div className="signinScreen__gradient" />

			{signUp && <Signup />}
		</div>
		// </div>
	);
};
