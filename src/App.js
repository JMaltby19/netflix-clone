import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import "./App.css";
import { HomeScreen } from "./Containers/Homescreen/HomeScreen";
import { LoginScreen } from "./Containers/Login/LoginScreen";
import { Profile } from "./Containers/Account/Profile";
import { Series } from "./Containers/Series/Series";
import { Films } from "./Containers/Films/Films";
import { Trending } from "./Containers/Trending/Trending";
import { ProfileLoader } from "./components/Loader/ProfileLoader";
import { SearchResult } from "./Containers/SearchResults/SearchResult";
import { FavouriteList } from "./Containers/MyList/FavouriteList";
import { Nav } from "./components/Navigation/Nav";
import { searchURL } from "./config";
import axios from "axios";

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [favourites, setFavourites] = useState([]);
	const [movies, setMovies] = useState([]);
	const [results, setResults] = useState([]);

	console.log(searchInput);
	const history = useHistory();

	useEffect(() => {
		if (searchInput) {
			history.push(`/search`);
		}
	});

	const onSearch = async () => {
		try {
			const response = await axios.get(searchURL(searchInput));
			setResults(response.data.results);
			history.push(`/search`);
		} catch (error) {
			console.log("Error", error);
		}
	};

	const enter = (e) => {
		console.log("enter key clicked");
		if (e.key === "Enter" && searchInput.length > 1) {
			onSearch();
			e.target.value = "";
		}
		console.log("A key clicked!");
	};

	return (
		<div className="app">
			<Route
				render={({ location }) => {
					if (location.pathname !== "/") {
						return (
							<Nav
								searchInput={searchInput}
								setSearchInput={setSearchInput}
								enter={enter}
							/>
						);
					}
				}}
			/>

			<Switch>
				<Route path="/" exact component={LoginScreen} />
				<Route path="/profileloader" exact component={ProfileLoader} />
				<Route
					path="/home"
					exact
					render={() => (
						<HomeScreen
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							favourites={favourites}
							setFavourites={setFavourites}
							movies={movies}
							setMovies={setMovies}
						/>
					)}
				/>
				<Route path="/profile" exact component={Profile} />
				<Route
					path="/series"
					render={() => (
						<Series
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							favourites={favourites}
							setFavourites={setFavourites}
						/>
					)}
				/>
				<Route
					path="/films"
					render={() => (
						<Films
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							favourites={favourites}
							setFavourites={setFavourites}
						/>
					)}
				/>
				<Route
					path="/trending"
					render={() => (
						<Trending
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							favourites={favourites}
							setFavourites={setFavourites}
						/>
					)}
				/>
				<Route
					path="/mylist"
					render={() => (
						<FavouriteList
							favourites={favourites}
							setFavourites={setFavourites}
							movies={movies}
							setMovies={setMovies}
						/>
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchResult
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							movies={movies}
							setMovies={setMovies}
							results={results}
						/>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
