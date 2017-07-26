import React from "react";

export class User extends React.Component {
	render() {
		return (
				<div className="field flex-row user">
					<div className="avatar">
						<img src={this.props.src} alt="user avatar"/>
					</div>
					<div className="username">{this.props.name}</div>
				</div>
			)
	}
}