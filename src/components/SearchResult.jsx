import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card } from "./Card";
import "../styles/searchResult.scss";
import { Nav } from "./Navigation/Nav";
import { searchURL } from "../config";
import axios from "axios";
import { useHistory } from "react-router";

export const SearchResult = ({ showList, searchInput, setSearchInput }) => {
	const [results, setResults] = useState([]);

	console.log(searchInput);
	const history = useHistory();

	const onSearch = async () => {
		try {
			const response = await axios.get(searchURL(searchInput));
			setResults(response.data.results);
			history.push(`/search`);
			console.log(response.data.results);
		} catch (error) {
			console.log("Error", error);
		}
	};

	//handling enter key press
	const enter = (e) => {
		if (e.key === "Enter" && searchInput.length > 0) {
			onSearch();
			e.target.value = "";
		}
		console.log("A key clicked!");
	};

	return (
		<div>
			<Nav
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				enter={enter}
			/>
			<div className="films">
				<div className="search__posters">
					{results.length &&
						results
							.filter((movie) => movie.backdrop_path != null)
							.map((movie) => <Card movie={movie} key={movie.id} />)}
				</div>
			</div>
		</div>
		// <div>
		// // 	{/* <Nav /> */}
		// // 	<div className="films">
		// // 		<div className="search__posters">
		// // 			{movies &&
		// // 				movies.map((movie, index) => (
		// // 					<Card className="search__card" movie={movie} index={index} />
		// // 				))}
		// // 		</div>
		// // 	</div>
		// </div>
		/* <form
				// onSubmit={submit}
				action="search"
				// className={`search ${showSearch ? "show-search" : ""}`} */
		// {/* > */}
		// {/* <input
		// className="search"
		// value={input}
		// onKeyUp={submit}
		// onChange={handleSearch}
		// placeholder="Type to search..."
		// ></input> */}
		/* <input
				// onInput={(e) => {
				// 	setInput(e.target.value);
				// }}
				// ref={targetRef}
				// type="text"
				// name="search"
				// placeholder="Search"
				// onMouseEnter={() => setInputHover(true)}
				// onMouseLeave={() => setInputHover(false)}
				// onBlur={() => {
				// 	setShowSearch(false);
				// 	setInputHover(false);
				// }}
				/> */
	);
};
