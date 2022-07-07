import React from "react";
import "../styles/homeScreen.scss";
import { Nav } from "../components/Navigation/Nav";
import { Banner } from "./Banner";
import { Row } from "./Row";
import requests from "../config";

export const HomeScreen = ({ setShowList, searchInput, setSearchInput }) => {
	return (
		<>
			<div className="homeScreen">
				<Nav
					setShowList={setShowList}
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
				<Banner />
				<Row
					title="Netflix Originals"
					fetchUrl={requests.Netflix.url}
					isLargeRow
				/>
				<Row title="Trending Now" fetchUrl={requests.Trending.url} />
				<Row title="Top Rated" fetchUrl={requests.TopRated.url} />
				<Row title="Action" fetchUrl={requests.Action.url} />
				<Row title="Comedy" fetchUrl={requests.Comedy.url} />
				<Row title="Documentaries" fetchUrl={requests.Documentaries.url} />
				<Row title="Horror" fetchUrl={requests.Horror.url} />
				<Row title="Romance" fetchUrl={requests.Romance.url} />
			</div>
		</>
	);
};
