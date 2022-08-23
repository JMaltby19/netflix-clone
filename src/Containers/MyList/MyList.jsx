import React, { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import "../../styles/mylist.scss";

export const MyList = ({ favourites, setFavourites }) => {
	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem("Netflix-clone-favourites")
		);
		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, [setFavourites]);

	console.log(favourites);
	return (
		<>
			<div className="list__container">
				<div className="list__posters">
					{favourites &&
						favourites
							.filter((movie) => movie.backdrop_path != null)
							.map((movie) => (
								<Card
									movie={movie}
									key={movie.id}
									favourites={favourites}
									setFavourites={setFavourites}
								/>
							))}
				</div>
			</div>
		</>
	);
};
