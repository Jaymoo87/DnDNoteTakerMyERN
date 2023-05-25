import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ComponentColors, ComponentSizes } from './types';

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'color'> {
  bordered?: boolean;
  color?: ComponentColors;
  size?: ComponentSizes;
}

const Textarea = ({
  value,
  placeholder,
  className,
  color,
  bordered = true,
  size,
  ...rest
}: TextareaProps): JSX.Element => {
  const classes = twMerge(
    'textarea',
    className,
    clsx({
      'textarea-bordered': bordered,
      [`textarea-${color}`]: color,
      [`textarea-${size}`]: size,
    })
  );
  return <textarea {...rest} placeholder={placeholder} value={value} className={classes} />;
};

export default Textarea;
