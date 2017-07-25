import React from "react";

export class Row extends React.Component {
	render() {
		var user = this.props.data;
		return (
			<div className="row">
				<div className="field">{user.username}</div>
				<div className="field">
					<img src={user.img} alt="user avatar"/>
				</div>
				<div className="field">{user.alltime}</div>
				<div className="field">{user.recent}</div>
			</div>
		)
	}
}
