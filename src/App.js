import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./components/HomeScreen";
import { LoginScreen } from "./components/LoginScreen";
import { Profile } from "./components/Profile";
import { Series } from "./components/Series";
import { Films } from "./components/Films";
import { Trending } from "./components/Trending";
import { MyList } from "./components/MyList";
import { ProfileLoader } from "./components/ProfileLoader";
import { SearchResult } from "./components/SearchResult";

function App() {
	const [showList, setShowList] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	return (
		<div className="app">
			<Switch>
				<Route path="/" exact component={LoginScreen} />
				<Route path="/profileloader" exact component={ProfileLoader} />
				<Route
					path="/home"
					exact
					component={() => (
						<HomeScreen
							setShowList={setShowList}
							searchInput={searchInput}
							setSearchInput={setSearchInput}
						/>
					)}
				/>
				<Route path="/profile" exact component={Profile} />
				<Route path="/series" exact component={Series} />
				<Route path="/films" exact component={Films} />
				<Route path="/trending" exact component={Trending} />
				<Route path="/mylist" exact component={MyList} />
				<Route
					path="/search"
					exact
					component={() => (
						<SearchResult
							showList={showList}
							setShowList={setShowList}
							searchInput={searchInput}
							setSearchInput={setSearchInput}
						/>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
