import React from "react";
import { Row } from "./Row";
import { Header } from "./Header";

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
					<Header/>
					<div className="row section-bar">
						<div className="field rank section-title">Rank</div>
						<div className="field user section-title">Camper</div>
						<div onClick={ () => this.setState({mostRecent: true}) } 
							className="field section-title clickable">
							Past 30 days&nbsp; 
							{ this.state.mostRecent ? <span>&#9660;</span> : "" }
						</div>
						<div onClick={ () => this.setState({mostRecent: false}) } 
							className="field section-title clickable">
							All time&nbsp;
							{ this.state.mostRecent ? "" : <span>&#9660;</span> }
						</div>
					</div>
					{content}
				</div>
			)
	}
}