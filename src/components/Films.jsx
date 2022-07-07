import React, { useState, useEffect } from "react";
import { Nav } from "./Navigation/Nav";
import { FilmFilter } from "./FilmFilter";
import requests from "../config";
import "../styles/films.scss";

export const Films = () => {
	const [selectedGenre, setSelectedGenre] = useState(requests.Popular.url);

	return (
		<>
			<Nav />
			<div className="filter__container">
				<button
					className={selectedGenre === requests.Popular.url ? "active" : ""}
					onClick={() => setSelectedGenre(requests.Popular.url)}
				>
					Popular
				</button>
				<button
					className={selectedGenre === requests.Action.url ? "active" : ""}
					onClick={() => setSelectedGenre(requests.Action.url)}
				>
					Action
				</button>
				<button
					className={selectedGenre === requests.Comedy.url ? "active" : ""}
					onClick={() => setSelectedGenre(requests.Comedy.url)}
				>
					Comedy
				</button>
				<button
					className={
						selectedGenre === requests.Documentaries.url ? "active" : ""
					}
					onClick={() => setSelectedGenre(requests.Documentaries.url)}
				>
					Documentaries
				</button>
				<button
					className={selectedGenre === requests.Horror.url ? "active" : ""}
					onClick={() => setSelectedGenre(requests.Horror.url)}
				>
					Horror
				</button>
				<button
					className={selectedGenre === requests.Romance.url ? "active" : ""}
					onClick={() => setSelectedGenre(requests.Romance.url)}
				>
					Romance
				</button>
				<button
					className={selectedGenre === requests.Trending.url ? "active" : ""}
					onClick={() => setSelectedGenre(requests.Trending.url)}
				>
					Trending
				</button>
			</div>
			<h3>{requests.title}</h3>
			<FilmFilter selectedGenre={selectedGenre} />
		</>
	);
};
