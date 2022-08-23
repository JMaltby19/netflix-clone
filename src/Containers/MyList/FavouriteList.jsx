import React from "react";
import { MyList } from "./MyList";

export const FavouriteList = ({ favourites, setFavourites }) => {
	return (
		<div>
			<MyList favourites={favourites} setFavourites={setFavourites} />
		</div>
	);
};
