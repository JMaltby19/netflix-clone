import React from "react";
import { useHistory } from "react-router-dom";
import netflix_avatar from "../../assets/netflix_avatar.png";
import "../../styles/navProfile.scss";
import axios from "axios";

export const NavProfile = () => {
	const history = useHistory();

	const logout = () => {
		axios.delete(
			`http://localhost:6001/logout/${localStorage.getItem("email")}`,
			{ headers: { token: localStorage.getItem("token") } }
		);

		localStorage.clear();
		history.push("/");
	};

	return (
		<div>
			<img
				onClick={() => history.push("/profile")}
				className="nav__avatar"
				src={netflix_avatar}
				alt=""
			/>
			<nav className="nav__dropdown">
				<ul>
					<li
						onClick={() => history.push("/profile")}
						className="nav__dropdown-item"
					>
						Account
					</li>
					<li onClick={logout} className="nav__dropdown-item">
						Sign out of Netflix
					</li>
				</ul>
			</nav>
		</div>
	);
};
