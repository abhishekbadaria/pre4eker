import React from "react";
import PropTypes from "prop-types";

const Cross = ({ color }) => (
  <div>
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.98986 0.875398L4.3754 3.48986L7 6.11446L6.11446 7L3.48986 4.3754L0.875398 6.98986L0.0245652 6.13902L2.63902 3.52457L0 0.885542L0.885542 0L3.52457 2.63902L6.13902 0.0245657L6.98986 0.875398Z"
        fill={color || "Black"}
      />
    </svg>
  </div>
);

Cross.defaultProps = {
  color: "",
};

Cross.propTypes = {
  color: PropTypes.string,
};

export default Cross;
