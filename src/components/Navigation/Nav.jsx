import React, { useState, useEffect } from "react";
import "../../styles/nav.scss";
import netflix__logo from "../../assets/net__logo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavProfile } from "./NavProfile";
import { Search } from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../utils";

export const Nav = ({ setShowList, searchInput, setSearchInput, enter }) => {
	const [show, setShow] = useState(false);
	const [openNav, setOpenNav] = useState(false);

	const history = useHistory();

	const navBarTransition = () => {
		if (window.scrollY > 30 ? setShow(true) : setShow(false));
	};

	useEffect(() => {
		window.addEventListener("scroll", navBarTransition);
		return () => window.removeEventListener("scroll", navBarTransition);
	}, []);

	let clickRef = useClickOutside(() => {
		setOpenNav(false);
	});

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__cnts">
				<img
					onClick={() => history.push("/home")}
					className="nav__logo"
					src={netflix__logo}
					alt=""
				/>
				<div className="nav__dropdown-trigger">
					<NavProfile />
				</div>
			</div>
			<button className="nav__btn" onClick={() => setOpenNav(!openNav)}>
				Browse{"  "}
				<span>
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</button>
			<nav>
				<ul ref={clickRef} className={`nav__menu ${openNav && "open"}`}>
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
