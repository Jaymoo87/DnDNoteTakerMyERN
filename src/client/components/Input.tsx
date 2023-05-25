import React from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ComponentColors, ComponentSizes } from './types';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  color?: ComponentColors;
  bordered?: boolean;
  size?: ComponentSizes;
}

const Input = ({ value, placeholder, type, className, color, bordered = true, size, ...rest }: InputProps) => {
  const classes = twMerge(
    'input',
    className,
    clsx({
      'input-bordered': bordered,
      [`input-${color}`]: color,
      [`input-${size}`]: size,
    })
  );

  return <input className={classes} type={type} placeholder={placeholder} value={value} {...rest} />;
};

export default Input;
