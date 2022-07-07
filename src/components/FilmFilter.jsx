import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "../styles/filmfilter.scss";
import axios from "axios";

export const FilmFilter = ({ selectedGenre }) => {
	const [movies, setMovies] = useState([]);
	// const [filtered, setFiltered] = useState([]);
	// const [activeGenre, setActiveGenre] = useState(0);

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

	console.log(movies);
	// console.log(filtered);

	return (
		<div>
			<div className="films">
				<div className="films__posters">
					{movies
						.filter((movie) => movie.backdrop_path != null)
						.map((movie, index) => (
							<Card className="films__card" key={index} movie={movie} />
						))}
				</div>
			</div>
		</div>
	);
};
