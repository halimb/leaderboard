import React from "react";
import src from "../img/fcc.png";

export class Header extends React.Component {
	render() {
		return(
				<div className="row header">
					<div className="logo">
						<img src={src} alt="fcc logo"/>
					</div>
					<h1>FreeCodeCamp Leaderboard</h1>
				</div>
			)
	}
}