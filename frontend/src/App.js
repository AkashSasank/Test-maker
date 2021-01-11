import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from "./config/routes";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					{routes}
				</Router>
			</ErrorBoundary>
		);
	}
}

export default App;
