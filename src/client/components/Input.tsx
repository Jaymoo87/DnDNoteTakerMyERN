import React from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentColors, ComponentSizes } from "./types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: ComponentColors;
  bordered?: boolean;
  sizing?: ComponentSizes;
}

const Input = ({
  value,
  placeholder,
  type,
  className,
  variant,
  bordered = true,
  sizing,

  ...rest
}: InputProps): JSX.Element => {
  const classes = twMerge(
    "p-3 mt-1 justify-self-center font-serif bg-gray-700 border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
    className,
    clsx({
      "input-bordered": bordered,
      [`input-${variant}`]: variant,
      [`input-${sizing}`]: sizing,
    })
  );

  return <input className={classes} type={type} placeholder={placeholder} value={value} {...rest} />;
};

export default Input;
