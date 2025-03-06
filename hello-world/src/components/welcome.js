/**
 * Welcome1 is a functional React component that renders a heading.
 *
 * @returns {JSX.Element} A heading element with the text "Welcome to React".
 */

/**
 * Welcome2 is a functional React component that renders a heading.
 *
 * @returns {JSX.Element} A heading element with the text "Welcome Functional Component".
 */
import React from "react";

export function Welcome1({ name, designation }) {
  // const { name, designation } = props;
  return (
    <h1>
      Welcome {name} @ {designation}
    </h1>
  );
}

export const Welcome2 = (props) => {
  return (
    <div>
      <h1>
        Welcome {props.name} @ {props.designation}
      </h1>
      {props.children}
    </div>
  );
};
// export default Welcome = () => return <h1>Welcome to React</h1>;

// export default welcome;
