import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import axios from "axios";
import { requests } from "../../config";

export const Trending = ({ favourites, setFavourites }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getShowList = async () => {
			try {
				const request = await axios.get(requests.Trending.url);
				setMovies(request.data.results);
			} catch (error) {
				console.log(error);
			}
		};
		getShowList();
	}, []);

	console.log(movies);

	return (
		<>
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
		</>
	);
};
