import React, { useState } from "react";
import { validatePassword } from "../../utils";
import "../../styles/profileScreen.scss";

export const Password = ({ getData, onUserInput, updateProfile }) => {
	const [update, setUpdate] = useState(false);
	const [validate, setValidate] = useState({});

	const handleUpdate = () => {
		setUpdate(!update);
	};

	return (
		<div className="profile__data">
			{update ? (
				<>
					<p>******</p>

					<input
						className="profile__input"
						type="text"
						id="password"
						placeholder="min 8 chars, 1 u-case, 1 l-case, 1 number & 1 (@, $, !, %, *, ?, &)"
						onInput={(e) => {
							const test = validatePassword(e);
							setValidate(test);
							if (test.valid) {
								onUserInput(e);
							}
						}}
					/>
				</>
			) : (
				<p>******</p>
			)}
			{update ? (
				<>
					{/* <p>
						"Must contain: 8 characters, one uppercase, one lowercase, one
						number and one of: @ $ ! % * ? &"
					</p> */}
					<button
						className="profile__btn"
						onClick={() => {
							handleUpdate();
							if (validate.valid) {
								updateProfile("password");
							}
						}}
					>
						{!validate.valid ? "cancel" : "save"}
					</button>
				</>
			) : (
				<button
					className="profile__btn"
					onClick={() => {
						handleUpdate();
					}}
				>
					change
				</button>
			)}
		</div>
	);
};
