import { HtmlAttributes } from 'csstype';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  optional?: boolean;
}

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={twMerge('container px-2 mx-auto md:px-0', className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
