import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const AddFavourite = () => {
	return (
		<div>
			<FontAwesomeIcon
				className="card__btn"
				icon={faPlusCircle}
				style={{ width: "4em" }}
			/>
		</div>
	);
};
