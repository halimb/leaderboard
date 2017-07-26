import React from "react";
import { User } from "./User.js";

export class Row extends React.Component {
	render() {
		var user = this.props.data;
		return (
			<div className="row">
				<div className="field rank">{this.props.rank}</div>
				<User name={user.username} src={user.img}/>
				<div className="field">{user.alltime}</div>
				<div className="field">{user.recent}</div>
			</div>
		)
	}
}
