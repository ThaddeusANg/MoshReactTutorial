import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { ID: 1, value: 3, Name: "productA" },
      { ID: 2, value: 4, Name: "productB" },
      { ID: 3, value: 5, Name: "productC" },
      { ID: 4, value: 6, Name: "productD" }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    // fired after a component is added to the dom, good place to time making AJAX calls
    console.log("App - mounted");
  }

  HandleDelete = ID => {
    const counters = this.state.counters.filter(counter => counter.ID !== ID);
    this.setState({ counters: counters });
    console.log("Delete Event Handled for: " + ID);
  };

  HandleUpdate = (id, value) => {
    console.log("Update: " + id + " with: " + value);
    const counters = [...this.state.counters];
    counters.find(c => c.ID == id).value = value;

    this.setState({ counters });
  };

  HandleReset = () => {
    let newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ newCounters });
  };

  render() {
    console.log("App - rendered");
    debugger;
    return (
      <React.Fragment>
        <NavBar
          TotalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            HandleReset={this.HandleReset}
            HandleDelete={this.HandleDelete}
            HandleUpdate={this.HandleUpdate}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
