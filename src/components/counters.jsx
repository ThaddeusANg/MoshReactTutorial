import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.HandleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map(counter => (
          // this is passed to the children in the this.props property
          <Counter
            key={counter.ID}
            counter={counter}
            HandleDelete={this.props.HandleDelete}
            HandleUpdate={this.props.HandleUpdate}
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
