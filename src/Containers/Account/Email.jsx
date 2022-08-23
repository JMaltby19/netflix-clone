import React, { useState } from "react";
import { validateEmail } from "../../utils";
import "../../styles/profileScreen.scss";

export const Email = ({ getData, onUserInput, updateProfile }) => {
	const [update, setUpdate] = useState(false);
	const [validate, setValidate] = useState({});

	const handleUpdate = () => {
		setUpdate(!update);
	};

	return (
		<div className="profile__input">
			{update ? (
				<>
					<p>{getData.userProfile.email}</p>

					<input
						type="text"
						id="email"
						placeholder="Enter new email"
						onInput={(e) => {
							const test = validateEmail(e);
							setValidate(test);
							if (test.valid) {
								onUserInput(e);
							}
						}}
					/>
				</>
			) : (
				<p>{getData.userProfile.email}</p>
			)}
			{update ? (
				<button
					className="profile__btn"
					onClick={() => {
						handleUpdate();
						if (validate.valid) {
							updateProfile("email");
						}
					}}
				>
					{!validate.valid ? "cancel" : "save"}
				</button>
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
