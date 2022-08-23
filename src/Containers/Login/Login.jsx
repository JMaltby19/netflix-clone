import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../styles/signin2.scss";

export const Login = ({ setSignUp }) => {
	const [input, setInput] = useState({});
	// const [errorMessage, setErrorMessage] = useState();

	const { email, password } = input;

	const history = useHistory();

	const signUpBtn = () => {
		setSignUp(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const signIn = async () => {
		try {
			const response = await axios.post("http://localhost:6001/login", input);

			console.log(response);

			if (response.data.status) {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("email", email);
				history.push("/profileloader");
			} else {
				alert(response.data.error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const signInAsGuest = () => {
		history.push("/home");
	};

	return (
		<div>
			<form className="signinScreen__form" onSubmit={handleSubmit}>
				<h1 className="signinScreen__title">Sign In</h1>
				<div className="signinScreen__signin">
					<input
						onInput={(e) => {
							setInput({ ...input, [e.target.name]: e.target.value });
						}}
						className="signinScreen__input"
						type="text"
						name={"email"}
						input={email}
						placeholder="E-mail"
					/>
				</div>
				<div className="signinScreen__signin">
					<input
						onInput={(e) => {
							setInput({ ...input, [e.target.name]: e.target.value });
						}}
						className="signinScreen__input"
						type="password"
						name={"password"}
						input={password}
						placeholder="Password"
					/>
				</div>
				<button onClick={signIn} className="signinScreen__btn">
					Sign In
				</button>
				<button onClick={signInAsGuest} className="signinScreen__btn">
					Sign In as Guest
				</button>
				<hr className="signinScreen__divider" />
				<small className="signinScreen__signup">
					Haven't registered yet?
					<span className="signinScreen__toggler">
						<button onClick={signUpBtn} className="signupScreen__btn">
							Sign Up
						</button>
					</span>
				</small>
			</form>
		</div>
	);
};
