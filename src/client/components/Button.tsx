import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ComponentColors, ComponentSizes } from './types';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  href?: string;
  size?: ComponentSizes;
  color?: ComponentColors;
  fullWidth?: boolean;
  wide?: boolean;
  active?: boolean;
  loading?: boolean;
  responsive?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = ({
  children,
  href,
  size,
  color,
  fullWidth,
  loading,
  active,
  startIcon,
  endIcon,
  responsive,
  className,
  disabled,
  wide,
  ...rest
}: ButtonProps): JSX.Element => {
  const classes = twMerge(
    'btn',
    className,
    clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
      [`btn-${size}`]: size,
      [`btn-${color}`]: color,
      'btn-block': fullWidth,
      'btn-wide': wide,
      'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
      'btn-active': active,
      'btn-disabled': disabled,
      loading: loading,
    })
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </a>
    );
  } else {
    return (
      <button {...rest} className={classes} disabled={disabled}>
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    );
  }
};

export default Button;
