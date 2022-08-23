import React from "react";
import { Card } from "../../components/Card/Card";
import "../../styles/searchResult.scss";

export const SearchResult = ({ results, searchInput }) => {
	console.log(searchInput);

	return (
		<div>
			<div className="films">
				<div className="search__result">Search result: {searchInput}</div>
				<div className="search__posters">
					{results.length &&
						results
							.filter((movie) => movie.backdrop_path != null)
							.map((movie) => <Card movie={movie} key={movie.id} />)}
				</div>
			</div>
		</div>
	);
};
