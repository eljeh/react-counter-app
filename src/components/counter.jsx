import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };


  render() {
    return (
      <div className="mt-3 mx-auto">
        
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm ml-5"
        >
          Increment
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 mr-3 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
