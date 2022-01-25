import React from 'react';
import { TailwindTextColors } from '../colors/types';

type TailwindFontFamily =
  | 'font-mono'
  | 'font-serif'
  | 'font-sans'
  | 'font-display';
type TailwindTextAlign = 'text-left' | 'text-right' | 'text-center';
type TailwindTextSizes =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl';

type PropsType = {
  children?: React.ReactNode;
  variant?: keyof JSX.IntrinsicElements;
  color?: TailwindTextColors;
  size?: TailwindTextSizes;
  textAlign?: TailwindTextAlign;
  fontFamily?: TailwindFontFamily;
  className?: string;
};

export type {
  TailwindTextSizes,
  TailwindFontFamily,
  TailwindTextAlign,
  PropsType,
};
