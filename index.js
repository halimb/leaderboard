import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import "whatwg-fetch";	

const recentURL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const allTimeURL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
var recent;
var allTime;
function init() {
	fetch(recentURL).then(response => response.json()
							.then(json => recent = json) );
	fetch(allTimeURL).then(response => response.json()
							.then(json => alltime = json) );
}

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
						recent: "Fetching data...",
						allTime: "Fetching data..."	
					 }
	}

	componentWillMount() {
		fetch(recentURL).then(response => response.json()
							.then(json => this.setState({recent: json})) );
		fetch(allTimeURL).then(response => response.json()
							.then(json => this.setState({allTime: json})) );
	}

	render() {
		var recentNames;
		if(Array.isArray(this.state.recent)){
			recentNames = [];
			for(var i = 0; i < this.state.recent.length; i++) {
				var current = this.state.recent[i]
				recentNames.push(<p key={i}>{current.username}</p>)
			}
		}
		else {
			recentNames = this.state.recent
		} 

		return(
				<div>
					<div>{recentNames}
					</div>
					<p>{
						Array.isArray(this.state.allTime) ? 
							this.state.allTime[0].username : 
							this.state.allTime
						}
					</p>
					<p>
						<span style={{fontSize: "17vw"}}>babla</span>
					</p>
				</div>
			)
	}
}

ReactDOM.render( 
	<Test/>,
	document.getElementById("app")
)