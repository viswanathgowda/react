import React, { Component } from "react";
// There are four approaches to event binding in this code:

// 1. Binding in the render method
// <button onClick={this.eventBind.bind(this)}>Click</button>
// Advantages: Simple and straightforward.
// Disadvantages: Creates a new function on every render, which can lead to performance issues in large applications.

// 2. Using an arrow function in the render method
// <button onClick={() => this.eventBind()}>Click</button>
// Advantages: Simple and straightforward.
// Disadvantages: Creates a new function on every render, which can lead to performance issues in large applications.

// 3. Binding in the constructor
// this.eventBind = this.eventBind.bind(this);
// <button onClick={this.eventBind}>Click</button>
// Advantages: Binds the function once in the constructor, avoiding the performance issues of the previous two methods.
// Disadvantages: Slightly more verbose and requires the use of the constructor.

// 4. Using an arrow function as a class property
// eventBind = () => {
//   this.setState({
//     message: "Goodbye",
//   });
// };
// <button onClick={this.eventBind}>Click</button>
// Advantages: Binds the function once and is more concise than using the constructor. It is the most modern and preferred approach.
// Disadvantages: Requires a class property syntax which might need a Babel plugin to work in older setups.

// The best approach to use is the fourth one (using an arrow function as a class property) because it is concise, modern, and avoids the performance issues of the first two methods.
class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    // this.eventBind = this.eventBind.bind(this);
  }
  //   eventBind() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //   }

  eventBind = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.eventBind.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.eventBind()}>Click</button> */}
        {/* <button onClick={this.eventBind}>Click</button> */}
        <button onClick={this.eventBind}>Click</button>
      </div>
    );
  }
}

export default EventBind;
