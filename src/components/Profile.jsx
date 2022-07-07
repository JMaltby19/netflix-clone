import React, { useState, useEffect } from "react";
import "../styles/profile.scss";
import { Nav } from "./Navigation/Nav";
import netflix_avatar from "../assets/netflix_avatar.png";
import axios from "axios";

export const Profile = () => {
	const [getData, setGetData] = useState([]);

	const getProfileDetails = async () => {
		try {
			const response = await axios.get(
				`http://localhost:6001/get/${localStorage.getItem("email")}`,
				{
					headers: { token: localStorage.getItem("token") },
				}
			);

			console.log(response);

			setGetData({ userProfile: response.data.payload[0] });

			// console.log(getData);

			if (response.data.status === 1) {
				return response.data.payload;
			} else {
				return response.data.status;
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfileDetails();
	}, []);

	return (
		<div className="profileScreen">
			<Nav />
			{getData.userProfile && (
				<div className="profileScreen__body">
					<h1>Edit Profile</h1>
					<div className="profileScreen__info">
						<img src={netflix_avatar} alt="" />
						<div className="profileScreen__user">
							<h3>User name: </h3> {getData.userProfile.user_name}
							<h3>User name: </h3> {getData.userProfile.email}
							<h3>User name: </h3>
							{getData.userProfile.hashed_password}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
