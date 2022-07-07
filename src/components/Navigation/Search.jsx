import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/search.scss";

export const Search = ({
	showList,
	setShowList,
	searchInput,
	setSearchInput,
	enter,
}) => {
	// const [movies, setMovies] = useState([]);

	const handleInput = (e) => {
		// console.log("Hello", typeof setInput, e.target.value);
		setSearchInput(e.target.value);
	};

	return (
		<div className="search__box flex a-center">
			<input
				// key={searchInput}
				// defaultValue={searchInput}
				type="text"
				name="query"
				placeholder="Search..."
				value={searchInput}
				onInput={handleInput}
				onKeyUp={enter}
			/>

			<button className="search__icon">
				<FontAwesomeIcon icon={faSearch} />
			</button>

			<div className="search__layout">
				<div className="search__posters"></div>
			</div>
		</div>
	);
};
