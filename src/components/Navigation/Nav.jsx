import React, { useState, useEffect, useRef } from "react";
import "../../styles/nav.scss";
import netflix__logo from "../../assets/net__logo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavProfile } from "./NavProfile";
import { Search } from "./Search";
import axios from "axios";
import { searchURL } from "../../config";

export const Nav = ({ setShowList, searchInput, setSearchInput, enter }) => {
	const [show, setShow] = useState(false);

	//const history = useHistory();

	const navBarTransition = () => {
		if (window.scrollY > 100 ? setShow(true) : setShow(false));
	};

	useEffect(() => {
		window.addEventListener("scroll", navBarTransition);
		return () => window.removeEventListener("scroll", navBarTransition);
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__cnts">
				{/* <img
					onClick={() => history.push("/home")}
					className="nav__logo"
					src={netflix__logo}
					alt=""
				/> */}
				<div className="nav__dropdown-trigger">
					<NavProfile />
				</div>
			</div>

			<nav>
				<ul className="nav__menu">
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/series">Series</Link>
					</li>
					<li>
						<Link to="/films">Films</Link>
					</li>
					<li>
						<Link to="/trending">Trending</Link>
					</li>
					<li>
						<Link to="/mylist">My List</Link>
					</li>
				</ul>
			</nav>
			<div className="nav__search">
				<Search
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					setShowList={setShowList}
					enter={enter}
				/>
			</div>
		</div>
	);
};
