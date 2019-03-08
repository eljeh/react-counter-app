import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand">
					Total Counters: 
					<span className="badge badge-pill badge-secondary ml-2">{this.props.totalCounters}</span>
				</span>
			</nav>
		);
	}
}

export default NavBar;