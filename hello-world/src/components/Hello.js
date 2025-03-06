/**
 * A functional React component that renders a "Hello" message.
 *
 * This component demonstrates two ways of rendering elements in React:
 * 1. Using JSX (commented out).
 * 2. Without using JSX, by directly using React.createElement.
 *
 * The component returns a <div> element with an id of "hello" and a className of "dummyClass",
 * containing an <h1> element with the text "hello without JSX".
 *
 * @component
 * @example
 * Using JSX (commented out)
 *  return <h1>Hello JSX</h1>;
 *
 *  Without using JSX
 * return React.createElement(
 *   "div",
 *   { id: "hello", className: "dummyClass" },
 *   React.createElement("h1", null, "hello without JSX")
 * );
 *
 * @returns {React.Element} A React element representing the "Hello" message.
 */
import React from "react";

export const Hello = () => {
  /**Using JSX */
  // return <h1>Hello JSX</h1>;

  /**Without Using JSX */

  return React.createElement(
    "div",
    { id: "hello", className: "dummyCalss" },
    React.createElement("h1", null, "hello without JSX")
  );
};
