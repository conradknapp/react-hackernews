import React from "react";
import Spinner from "./Spinner";

const Button = ({ onClick, className = "", children }) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
};

const withSpinner = Component => ({ isLoading, ...rest }) =>
  isLoading ? <Spinner /> : <Component {...rest} />;

const ButtonWithSpinner = withSpinner(Button);

export default ButtonWithSpinner;
