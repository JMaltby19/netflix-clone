import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/search.scss";
import { useClickOutside } from "../../utils";

export const Search = ({ searchInput, setSearchInput, enter }) => {
	const [openSearch, setOpenSearch] = useState(false);

	const handleInput = (e) => {
		setSearchInput(e.target.value);
	};

	let clickRef = useClickOutside(() => {
		setOpenSearch(false);
	});

	return (
		<div className="search__box flex a-center">
			<input
				className={`search__input ${openSearch && "open"}`}
				ref={clickRef}
				type="text"
				name="query"
				placeholder="Search..."
				value={searchInput}
				onInput={handleInput}
				onKeyUp={enter}
			/>

			<button
				className="search__icon"
				onClick={() => setOpenSearch(!openSearch)}
			>
				<FontAwesomeIcon icon={faSearch} />
			</button>

			<div className="search__layout">
				<div className="search__posters"></div>
			</div>
		</div>
	);
};
