import React from "react";

const Spinner = () => {
  return (
    <svg className="spinner" width="44px" height="44px" viewBox="0 0 44 44">
      <circle
        className="path"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        cx="22"
        cy="22"
        r="20"
      />
    </svg>
  );
};

export default Spinner;
