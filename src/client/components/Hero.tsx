import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle, className, children, ...props }: HeroProps) => {
  const classes = twMerge('hero', className);

  return (
    <div className={classes} role="banner" {...props}>
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
