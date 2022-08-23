import React, { useState, useEffect } from "react";
import "../../styles/profile.scss";
import netflix_avatar from "../../assets/netflix_avatar.png";
import axios from "axios";
import { useHistory } from "react-router";
import { Email } from "./Email";
import { User } from "./User";
import { Password } from "./Password";

export const Profile = () => {
	const [getData, setGetData] = useState({});

	const history = useHistory();

	// const fetchProfileDetails = async () => {
	// 	const result = await getProfileDetails();
	// 	if (result) {
	// 		setGetData(result);
	// 	} else {
	// 		setGetData("Cannot retrieve your details");
	// 	}
	// };

	// useEffect(() => {
	// 	fetchProfileDetails();
	// }, []);

	const onUserInput = (e) => {
		setGetData({ ...getData, [e.target.id]: e.target.value });
		console.log(getData);
	};

	const updateProfile = async (name) => {
		await axios.patch(
			`http://localhost:6001/modify`,
			{ [name]: getData[name] },
			{
				headers: { token: localStorage.getItem("token") },
			}
		);
		getProfileDetails();
	};

	const getProfileDetails = async () => {
		try {
			const response = await axios.get(`http://localhost:6001/get`, {
				headers: { token: localStorage.getItem("token") },
			});

			console.log(response);

			setGetData({ userProfile: response.data.payload[0] });

			// console.log(getData);

			// if (response.data.status === 1) {
			// 	return response.data.payload;
			// } else {
			// 	return response.data.status;
			// }
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfileDetails();
	}, []);

	const deleteProfile = async () => {
		const response = await axios.delete(`http://localhost:6001/delete`, {
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
						<img src={netflix_avatar} alt="" />
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
