import React from 'react';
import type { PropsType } from './types';

export const Typography = ({
  children = 'The quick brown fox jumps over the lazy dog.',
  variant = 'p',
  color = 'currentColor',
  size = 'text-base',
  textAlign = 'text-left',
  fontFamily = 'font-sans',
  className,
  ...props
}: PropsType) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${size} ${color} ${textAlign} ${fontFamily} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
