import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = id => {
    const { counters } = this.state;
    const newCounters = counters.filter(item => item.id !== id);
    this.setState({ counters: newCounters });
  };

  handleIncrement = counter => {
    const { counters } = this.state;
    const index = counters.indexOf(counter);
    const newCounters = [...counters];
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const { counters } = this.state;
    const newCounters = counters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ counters: newCounters });
  };

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(i => i.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
