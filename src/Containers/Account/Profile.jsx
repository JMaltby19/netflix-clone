import React, { useState, useEffect } from "react";
import "../../styles/profile.scss";
import netflix_avatar from "../../assets/netflix_avatar.png";
import axios from "axios";
import { useHistory } from "react-router";
import { Email } from "./Email";
import { User } from "./User";
import { Password } from "./Password";
import { API_URL } from "../../config";

export const Profile = () => {
	const [getData, setGetData] = useState({});

	const history = useHistory();

	const onUserInput = (e) => {
		setGetData({ ...getData, [e.target.id]: e.target.value });
		console.log(getData);
	};

	const updateProfile = async (name) => {
		await axios.patch(
			`${API_URL}/modify`,
			{ [name]: getData[name] },
			{
				headers: { token: localStorage.getItem("token") },
			}
		);
		getProfileDetails();
	};

	const getProfileDetails = async () => {
		try {
			const response = await axios.get(`${API_URL}/get`, {
				headers: { token: localStorage.getItem("token") },
			});

			console.log(response);

			setGetData({ userProfile: response.data.payload[0] });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfileDetails();
	}, []);

	const deleteProfile = async () => {
		await axios.delete(`${API_URL}/delete`, {
			headers: { token: localStorage.getItem("token") },
		});
		localStorage.clear();
		history.push("/");
	};

	return (
		<div className="profileScreen">
			{getData.userProfile && (
				<div className="profileScreen__body">
					<h1>Edit Profile</h1>
					<div className="profileScreen__info">
						<img src={netflix_avatar} alt="" className="profile__img" />
						<div className="profileScreen__user">
							<h3>User name: </h3>
							<User
								getData={getData}
								onUserInput={onUserInput}
								updateProfile={updateProfile}
							/>
							<h3>Email: </h3>
							<Email
								getData={getData}
								onUserInput={onUserInput}
								updateProfile={updateProfile}
							/>
							<h3>Password: </h3>
							<Password
								getData={getData}
								onUserInput={onUserInput}
								updateProfile={updateProfile}
							/>
						</div>
					</div>
				</div>
			)}
			<div>
				{getData.userProfile && (
					<button className="profile__delete" onClick={deleteProfile}>
						Delete Profile
					</button>
				)}
			</div>
		</div>
	);
};
