import React, { useState } from "react";
import net__logo from "../../assets//net__logo.png";
import "../../styles/loginScreen.scss";
import { Register } from "./Register";

export const LoginScreen = () => {
	const [register, setRegister] = useState(false);

	const signIn = () => {
		setRegister(!register);
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
				<div className="loginScreen__welcome">
					<h2 className="loginScreen__header">
						Unlimited films, TV programmes and more.
					</h2>
					<h4 className="loginScreen__header2">
						Watch anywhere. Cancel at any time.
					</h4>
					<p className="loginScreen__header3">
						Ready to watch? Register details below to create your account or
						sign in
					</p>
					<button onClick={() => signIn()} className="loginScreen__signup--btn">
						Sign up
					</button>
				</div>
				<button onClick={() => signIn()} className="loginScreen__btn">
					Sign In/Sign Up
				</button>

				<div className="loginScreen__gradient" />

				<div className="loginScreen__body">{register && <Register />}</div>
				{/* <div>{signUp && <Signup />}</div> */}
			</div>
		</div>
	);
};
