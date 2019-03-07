import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		]
	}

	handleDelete = () => {
		console.log('Event Handle Called');
	}
	render() {
		return (
			<div className="mt-3 mx-5">
				{this.state.counters.map(counter => (
					<Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />
				))}
			</div>
		);
	}
}

export default Counters;