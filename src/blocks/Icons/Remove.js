import React from "react";
import PropTypes from "prop-types";

const Remove = ({ color }) => (
  <div>
    <svg
      width="7"
      height="1"
      viewBox="0 0 7 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.90731e-05L6.99999 0L7 0.999981L5.91125e-06 1L0 1.90731e-05Z"
        fill={color || "#000"}
      />
    </svg>
  </div>
);

Remove.defaultProps = {
  color: "",
};

Remove.propTypes = {
  color: PropTypes.string,
};

export default Remove;
