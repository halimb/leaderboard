import React from "react";

export class User extends React.Component {
	render() {
		let name = this.props.name;
		let imgSrc = this.props.src;
		
		return (
				<div className="flex-row">
					<div className="avatar">
						<img src={imgSrc} alt="user avatar"/>
					</div>
					<div className="username">{name}</div>
				</div>
			)
	}
}