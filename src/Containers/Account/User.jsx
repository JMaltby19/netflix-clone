import React, { useState } from "react";
import { validateUsername } from "../../utils";
import "../../styles/profileScreen.scss";

export const User = ({ getData, onUserInput, updateProfile }) => {
	const [update, setUpdate] = useState(false);
	const [validate, setValidate] = useState({});

	const handleUpdate = () => {
		setUpdate(!update);
	};

	return (
		<div className="profile__input">
			{update ? (
				<>
					<p className="profile__data">{getData.userProfile.user_name}</p>

					<input
						type="text"
						id="user_name"
						placeholder="Enter new user name"
						onInput={(e) => {
							const test = validateUsername(e);
							setValidate(test);
							if (test.valid) {
								onUserInput(e);
							}
						}}
					/>
				</>
			) : (
				<p className="profile__data">{getData.userProfile.user_name}</p>
			)}
			{update ? (
				<button
					className="profile__btn"
					onClick={() => {
						handleUpdate();
						if (validate.valid) {
							updateProfile("user_name");
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
