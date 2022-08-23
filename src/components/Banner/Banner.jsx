import React, { useEffect } from "react";
import { truncate } from "../../utils";
import { requests } from "../../config";
import { IMG_URL } from "../../config";
import axios from "axios";
import "../../styles/banner.scss";

export const Banner = ({ movies, setMovies, favourites, setFavourites }) => {
	useEffect(() => {
		const getMovie = async () => {
			try {
				const request = await axios.get(requests.Trending.url);
				setMovies(
					request.data.results[
						Math.floor(Math.random() * request.data.results.length - 1)
					]
				);
			} catch (error) {
				console.log(error);
			}
		};
		getMovie();
	}, [setMovies]);

	console.log(movies);

	const addFavouriteMovie = (movies) => {
		if (
			favourites.some((item) => {
				return movies.name === item.name;
			})
		) {
			return;
		}
		const newFavouriteList = [...favourites, movies];
		setFavourites(newFavouriteList);
		saveToStorage(newFavouriteList);
	};

	const saveToStorage = (items) => {
		localStorage.setItem("Netflix-clone-favourites", JSON.stringify(items));
	};

	return (
		<div className="banner">
			<img
				className="banner__img"
				src={`${IMG_URL}${movies?.backdrop_path}`}
				alt=""
			/>
			<div className="banner__cnts--container">
				<div className="banner__cnts">
					<h1 className="banner__title">
						{movies?.title || movies?.name || movies?.original_name}
					</h1>
					<div className="banner__btns">
						<button className="banner__btn play">Play</button>
						<button
							className="banner__btn myList"
							onClick={() => addFavouriteMovie(movies)}
						>
							My List
						</button>
					</div>
					<h1 className="banner__desc">{truncate(movies?.overview, 150)}</h1>
				</div>
			</div>
			<div className="banner--fadeBottom" />
			{/* </header> */}
		</div>
	);
};
