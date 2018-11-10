import React, { Component } from "react";

class Counter extends Component {
  // props is what is passed to a component (input to a component) STRICTLY INPUT CANNOT MODIFY
  // if you need to modify the input, put the input into the state, this guarantees that if we need to read the original input, it's available
  // state is local to the component, state can be optional, it is possible to pass all the data through props
  state = {
    value: this.props.counter.value,
    counter: this.props.counter,
    HandleDelete: this.props.HandleDelete,
    imageUrl: "https://picsum.photos/200",
    imageCaption: "random 200 pixel picture",
    tags: [
      { Name: "tag1", Id: 1 },
      { Name: "tag2", Id: 2 },
      { Name: "tag3", Id: 3 }
    ],
    emptyTags: []
  };

  // creating the event handler as a function is cleaner than manually binding an event to this, but is experimental
  //   constructor() {
  //     super();
  //     console.log(this.state);

  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags(tagsToRender) {
    let output =
      tagsToRender.length === 0 ? (
        <p>No tags</p>
      ) : (
        <ul>
          {tagsToRender.map(tag => (
            <li key={tag.Id}>{tag.Name}</li>
          ))}
        </ul>
      );

    return output;
  }

  TriggerIncrement = val => {
    console.log(val);
    this.setState({ value: this.state.value + 1 });
    console.log("Increment Clicked");
  };

  TriggerClear = ID => {
    this.clearValue();
    this.props.HandleDelete(ID);
  };

  clearValue = () => {
    console.log("Clear Clicked");
    this.setState({ value: 0 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <span style={{ fontSize: "2em" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.TriggerIncrement({ propertyA: "test" })}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m2"
          onClick={() => this.TriggerClear(this.state.counter.ID)}
        >
          Clear
        </button>
        {this.renderTags(this.state.tags)}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
