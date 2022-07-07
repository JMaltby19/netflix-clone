import React, { useState } from "react";
import net__logo from "../assets//net__logo.png";
import "../styles/loginScreen.scss";
import { Sign } from "./Sign";

export const LoginScreen = () => {
	const [signin, setSignin] = useState(false);

	return (
		<div className="loginScreen">
			<div className="login__bkg">
				<img
					onClick={() => setSignin(false)}
					className="loginScreen__logo"
					src={net__logo}
					alt=""
				/>
				<button onClick={() => setSignin(true)} className="loginScreen__btn">
					Sign In
				</button>

				<div className="loginScreen__gradient" />

				<div className="loginScreen__body">{signin && <Sign />}</div>
			</div>
		</div>
	);
};
