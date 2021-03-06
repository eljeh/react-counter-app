import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
	}
	componentWillUnmount() {
		console.log('Counter - Unmount');
	}
	render() {
		console.log('Counters - Rendered');
		const { onReset, counters, onDelete, onIncrement} = this.props;
		return (
			
			<div className="mt-3 mx-5">
				<button
					onClick={onReset}
					className="btn-primary btn-sm m-2">
					Reset
			</button>

				{counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;