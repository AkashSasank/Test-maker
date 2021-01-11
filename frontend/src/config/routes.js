import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import LogIn from "../pages/Login";
import SignUp from "../pages/Signup";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Catalogue from "../pages/Catalogue";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const routes=(
	<Router>
		<div>
			<Header />
			    <div class="main-container">
					<Switch>
						<Route exact path="/" component={Home} />,
						<Route exact path="/log-in" component={LogIn} />,
						<Route exact path="/sign-up" component={SignUp} />,
						<Route exact path="/profile" component={Profile} />,
						<Route exact path="/tests" component={Catalogue} />,
						<Route component={NotFound} />
					</Switch>
				</div>
			<Footer />				
		</div>
	</Router>
)

export default routes;
