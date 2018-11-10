import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    imageCaption: "random 200 pixel picture",
    tags: [
      { Name: "tag1", Id: 1 },
      { Name: "tag2", Id: 2 },
      { Name: "tag3", Id: 3 }
    ],
    emptyTags: []
  };

  // creating the event handler as a function is cleaner than manually binding an event to this
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

  handleIncrement = () => {
    this.state.count++;
    console.log("Increment Clicked");
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <img src={this.state.imageUrl} alt={this.state.imageCaption} />
        </div>
        <span style={{ fontSize: "2em" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags(this.state.tags)}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
