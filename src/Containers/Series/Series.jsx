import React, { useState } from "react";
import { SeriesFilter } from "./SeriesFilter";
import { seriesRequests } from "../../config";
import "../../styles/films.scss";

export const Series = ({ favourites, setFavourites }) => {
	const [selectedGenre, setSelectedGenre] = useState(
		seriesRequests.TvPopular.url
	);

	const requestsArray = Object.values(seriesRequests);

	return (
		<div>
			<div className="filter__container">
				{requestsArray.map((item) => {
					return (
						<button
							className={selectedGenre === item.url ? "active" : ""}
							onClick={() => setSelectedGenre(item.url)}
						>
							{item.title}
						</button>
					);
				})}
			</div>
			<h3>{seriesRequests.title}</h3>
			<SeriesFilter
				selectedGenre={selectedGenre}
				favourites={favourites}
				setFavourites={setFavourites}
			/>
		</div>
	);
};
