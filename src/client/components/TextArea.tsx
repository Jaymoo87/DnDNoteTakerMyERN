import React from "react";
import { twMerge } from "tailwind-merge";
import { ComponentSizes } from "./types";
import clsx from "clsx";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  bordered?: boolean;
  sizing?: ComponentSizes;
}

const TextArea = ({ bordered, sizing, name, value, rows, className, ...rest }: TextAreaProps): JSX.Element => {
  const classes = twMerge(
    "block w-full p-3 my-3 bg-[url(../../../pictures/greyParchment.jpg)] text-secondary notefont border-gray-700 rounded-md shadow-md focus:border-gray-700 focus:ring focus:ring-gray-600 focus:ring-opacity-70",
    className,
    clsx({
      "textarea-bordered": bordered,
      [`textarea-${sizing}`]: sizing,
    })
  );

  return <textarea name={name} rows={rows} className={classes} value={value} {...rest}></textarea>;
};

export default TextArea;
