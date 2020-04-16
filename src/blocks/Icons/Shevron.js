import React from "react";

const Shevron = (props) => {
  return (
    <div>
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0344238 1.16905L0.732916 0.502381L3.54531 3.1561L6.33428 0.499939L7.03473 1.16647L3.53314 4.50002L0.0344238 1.16905Z"
          fill={props.color || '#000'}
        />
      </svg>
    </div>
  );
};

export default Shevron;
