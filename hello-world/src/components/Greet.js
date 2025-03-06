/**
 * Greet is a React component that renders a simple greeting message.
 * This component is implemented as a class component.
 *
 * @class Greet
 * @extends {React.Component}
 * @description This component displays a heading with the text "Hello Class Component".
 */
import React from "react";

class Greet extends React.Component {
  /**We can't assign value to props like props.name = "Vishwa"
   * props are read-only
   * props are immutable
   */
  render() {
    return <h1>Hello Class Component - {this.props.name}</h1>;
  }
}

export default Greet;
