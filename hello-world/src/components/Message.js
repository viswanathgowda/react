/**
 * Message Component
 *
 * This is a React component that displays a message and a button.
 * When the button is clicked, the message changes.
 *
 * @component
 * @extends React.Component
 *
 * @example
 * return (
 *   <Message />
 * )
 *
 * State:
 * @property {Object} state - The state object of the component.
 * @property {string} state.message - The message to be displayed.
 *
 * Methods:
 * @method subscribe - Updates the state with a new message.
 *
 * @returns {JSX.Element} The rendered component.
 */
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super(); // calls the parent class constructor
    this.state = {
      message: "Welcome visitor",
    };
  }

  /**
   * Updates the component's state with a new message indicating that the user has subscribed.
   *
   * @function subscribe
   * @description This method sets the state of the component to update the message property with a thank you message.
   * It uses the setState method to trigger a re-render with the new state.
   */
  subscribe() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.subscribe()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
