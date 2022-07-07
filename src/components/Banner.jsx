import React, { useState, useEffect } from "react";
import { truncate } from "../utils";
import requests from "../config";
import { IMG_URL } from "../config";
import axios from "axios";
import "../styles/banner.scss";

export const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const getMovie = async () => {
			try {
				const request = await axios.get(requests.Trending.url);
				setMovie(
					request.data.results[
						Math.floor(Math.random() * request.data.results.length - 1)
					]
				);
			} catch (error) {
				console.log(error);
			}
		};
		getMovie();
	}, []);

	console.log(movie);

	return (
		<div className="banner">
			<header
				className="banner__img"
				style={{
					backgroundSize: "cover",
					backgroundImage: `url("${IMG_URL}${movie?.backdrop_path}")`,
					backgroundPosition: "center center",
					opacity: "0.8",
				}}
			>
				<div className="banner__cnts">
					<h1 className="banner__title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner__btns">
						<button className="banner__btn">Play</button>
						<button className="banner__btn">My List</button>
					</div>
					<h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
				</div>
				<div className="banner--fadeBottom" />
			</header>
		</div>
	);
};
