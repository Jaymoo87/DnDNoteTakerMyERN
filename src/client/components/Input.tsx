import React from "react";
import PropTypes from "prop-types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return <input className="input input-bordered" />;
};

export default Input;
