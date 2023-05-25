import React from 'react';

import clsx from 'clsx';

import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

const Card = ({ bordered = true, className, ...props }: CardProps): JSX.Element => {
  const classes = twMerge(
    'card',
    className,
    clsx({
      'card-bordered': bordered,
    })
  );

  return <div aria-label="Card" {...props} className={classes} />;
};

export default Card;
