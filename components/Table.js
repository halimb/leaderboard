import React from "react";
import { Row } from "./Row";

export class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mostRecent: true }
	}

	render() {
		var json = this.state.mostRecent ? 
				this.props.recent : this.props.allTime;
		var ready = Array.isArray(json);
		var content = [];
		
		for(var i = 0; i < json.length; i++) {
			let res = ready ? 
				( <Row rank={i + 1} data={json[i]} key={i}/> ) :
				( <div key={i} className="row">Fetching data...</div> );
			content.push(res);
		}

		return (
				<div className="table">
					<div className="row">
						<div className="field rank section-title">Rank</div>
						<div className="field user section-title">Camper</div>
						<div onClick={ () => this.setState({mostRecent: false}) } 
							className="field section-title">All time points</div>
						<div onClick={ () => this.setState({mostRecent: true}) } 
							className="field section-title">Points in past 30 days</div>
					</div>
					{content}
				</div>
			)
	}
}