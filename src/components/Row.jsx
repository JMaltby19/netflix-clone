import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";
import "../styles/row.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);
	// const [selectedId, setSelectedId] = useState(null);

	useEffect(() => {
		const getShowList = async () => {
			try {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
			} catch (error) {
				console.log(error);
			}
		};
		getShowList();
	}, [fetchUrl]);

	console.log(movies);

	return (
		<div className={`row ${isLargeRow && "rowLarge"}`}>
			<h2 className="row__title">{title}</h2>
			<div className="row__slider">
				{/* <MdChevronLeft size={40} /> */}
				<div
					id="slider"
					className={`row__posters ${isLargeRow && "row__postersLarge"}`}
				>
					{movies.map(
						(movie, index) =>
							((isLargeRow && movie.poster_path) ||
								(!isLargeRow && movie.backdrop_path)) && (
								<Card
									className="card__poster"
									key={index}
									movie={movie}
									largePoster={isLargeRow}
								/>
							)
					)}
				</div>
				{/* <MdChevronRight size={40} /> */}
			</div>
		</div>
	);
};
