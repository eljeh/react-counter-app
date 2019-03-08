import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({totalCounters}) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand">
				Total Counters: 
				<span className="badge badge-pill badge-secondary ml-2">
					{totalCounters}
				</span>
			</span>
		</nav>
	);
}

export default NavBar;