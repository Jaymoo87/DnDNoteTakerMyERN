import React from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentColors, ComponentSizes } from "./types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: ComponentColors;
  bordered?: boolean;
  sizing?: ComponentSizes;
}

const Input = ({ value, placeholder, type, className, variant, bordered = true, sizing, ...rest }: InputProps) => {
  const classes = twMerge(
    "input",
    className,
    clsx({
      "input-bordered": bordered,
      [`input-${variant}`]: variant,
      [`input-${sizing}`]: sizing,
    })
  );

  return <input className={classes} type={type} placeholder={placeholder} value={value} />;
};

export default Input;
