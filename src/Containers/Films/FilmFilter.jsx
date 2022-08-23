import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import "../../styles/filmfilter.scss";
import axios from "axios";

export const FilmFilter = ({ selectedGenre, favourites, setFavourites }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getShowList = async () => {
			try {
				const request = await axios.get(selectedGenre);
				setMovies(request.data.results);
			} catch (error) {
				console.log(error);
			}
		};
		getShowList();
	}, [selectedGenre]);

	return (
		<div>
			<div className="films">
				<div className="films__posters">
					{movies
						.filter((movie) => movie.backdrop_path != null)
						.map((movie, index) => (
							<Card
								className="films__card"
								key={index}
								movie={movie}
								favourites={favourites}
								setFavourites={setFavourites}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
