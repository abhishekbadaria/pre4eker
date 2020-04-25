import React from "react";
import PropTypes from "prop-types";

const Plus = ({ color }) => (
  <div>
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3.99528H4.0069V7H2.9931V3.99528H0V3.02123H2.9931V0H4.0069V3.02123H7V3.99528Z"
        fill={color}
      />
    </svg>
  </div>
);

Plus.defaultProps = {
  color: "#000",
};

Plus.propTypes = {
  color: PropTypes.string,
};

export default Plus;
