import React, { useState } from "react";
import net__logo from "../../assets//net__logo.png";
import "../../styles/loginScreen.scss";
import { Signin } from "./Signin";

export const LoginScreen = () => {
	const [signin, setSignin] = useState(false);

	const signIn = () => {
		setSignin(!signin);
	};

	return (
		<div className="loginScreen">
			<div className="login__bkg">
				<img
					onClick={() => signIn()}
					className="loginScreen__logo"
					src={net__logo}
					alt=""
				/>
				<button onClick={() => signIn()} className="loginScreen__btn">
					Sign In/Sign Up
				</button>

				<div className="loginScreen__gradient" />

				<div className="loginScreen__body">{signin && <Signin />}</div>
			</div>
		</div>
	);
};
