import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  renderCounters() {
    const { counters, onDelete, onIncrement } = this.props;
    return counters.map(item => {
      return (
        <Counter
          key={item.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={item}
        />
      );
    });
  }

  render() {
    const { onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.renderCounters()}
      </div>
    );
  }
}

export default Counters;
