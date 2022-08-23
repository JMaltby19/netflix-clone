import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/profileloader.scss";
import netflix_logo from "../../assets/netflix__logo.png";
import netflix_avatar from "../../assets/netflix_avatar.png";
import { useHistory } from "react-router";

export const ProfileLoader = (email) => {
	const [getData, setGetData] = useState([]);

	const history = useHistory();

	const getProfile = async () => {
		try {
			const response = await axios.get(`http://localhost:6001/get`, {
				headers: { token: localStorage.getItem("token") },
			});

			console.log(response);

			setGetData({ userProfile: response.data.payload[0] });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<>
			<img className="loader__logo" src={netflix_logo} alt="" />
			<div className="loader__container">
				{getData.userProfile && (
					<div>
						<h3 className="loader__title">Who's watching?</h3>
						<div className="loader__items">
							<img
								className="loader__img"
								src={netflix_avatar}
								alt=""
								onClick={() => history.push("/home")}
							/>
							<div className="loader__username">
								{getData.userProfile.user_name}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
