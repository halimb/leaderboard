import "whatwg-fetch";	
import React from "react";
import { Table } from "./Table";

const recentURL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const allTimeURL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";


export class TableContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
						recent: "Loading...",
						allTime: "Loading..."
					 }
	}

	componentWillMount() {
		fetch(recentURL).then(response => response.json()
							.then(json => this.setState({recent: json})) );
		fetch(allTimeURL).then(response => response.json()
							.then(json => this.setState({allTime: json})) );
	}

	render() {
		return(
				<Table  allTime={this.state.allTime} 
						recent={this.state.recent}	/>
			)
	}
}
