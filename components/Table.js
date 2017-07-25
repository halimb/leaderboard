import React from "react";
import { Row } from "./Row";

export class Table extends React.Component {
	render() {
		var json = this.props.allTime;
		var ready = Array.isArray(json);
		var content = [];
		
		for(var i = 0; i < 5; i++) {
			let res = ready ? 
				( <Row data={json[i]} key={i}/> ) :
				( <div key={i} className="row">Fetching data...</div> );
			content.push(res);
		}

		return (
				<div className="table">
					{content}
				</div>
			)
	}
}