import React, { Component } from "react";

/**
 * whenever we wanted to update the state, we should not update the state directly
 * we should use setState method to update the state
 * because it will re render the component with new data in UI
 * setState is async function
 * so it will not update the state immediately
 * it will update the state after all the calls are done
 * so to update the state after all the calls are done, we can use callback function
 * this.setState({}, callbackFunction)
 * callbackFunction will be called after the state is updated
 * how to use setState more effectively.
    1. use setState with a callback function
    2. use setState with a previous state value
    3. use setState with an object
    4. use setState with a function
    5. use setState with a promise
 *
 */

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  counter() {
    /**this will not work to re render component with new data in UI */
    // this.state.count = this.state.count + 1
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("call back async code", this.state.count)
    // );
    // console.log("sync code", this.state.count);

    /** setState using callback function*/

    this.setState(
      (prevState) => {
        return { count: prevState.count + 1 };
      },
      () => console.log("call back async code", this.state.count)
    );
  }

  incrementFiveTimes() {
    /***
     * when we call this.counter() 5 times, it will not increment the count by 5
     * it will increment the count by 1 for each call
     * because this.setState is async function
     * so it will not update the state immediately
     * it will update the state after all the calls are done
     * so to update the state after all the calls are done, we can use callback function
     * this.setState({}, callbackFunction)
     * callbackFunction will be called after the state is updated
     * so we can use callback function to update the state after all the calls are done
     *
     */
    this.counter();
    this.counter();
    this.counter();
    this.counter();
    this.counter();
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {/* <button onClick={() => this.counter()}>Increment</button> */}
        <button onClick={() => this.incrementFiveTimes()}>
          Increment 5 times
        </button>
      </div>
    );
  }
}

export default Count;
