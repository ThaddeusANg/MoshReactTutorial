import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { ID: 1, value: 3, Name: "productA" },
      { ID: 2, value: 4, Name: "productB" },
      { ID: 3, value: 5, Name: "productC" },
      { ID: 4, value: 6, Name: "productD" }
    ]
  };

  HandleDelete = ID => {
    const counters = this.state.counters.filter(counter => counter.ID !== ID);
    this.setState({ counters: counters });
    console.log("Delete Event Handled for: " + ID);
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // this is passed to the children in the this.props property
          <Counter
            key={counter.ID}
            counter={counter}
            HandleDelete={this.HandleDelete}
          >
            <h4>
              #{counter.ID}: {counter.Name}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
