type PseudoClassTypes = 'hover' | 'default' | 'active' | 'focus';
type SelectionTypes = '' | 'on-';
type ColorTypes = 'primary' | 'secondary' | 'tertiary' | 'accentA' | 'accentB';

type TailwindBgColors =
  | `bg-${SelectionTypes}${ColorTypes}-${PseudoClassTypes}`
  | 'currentColor';
type TailwindTextColors =
  | `text-${SelectionTypes}${ColorTypes}-${PseudoClassTypes}`
  | 'currentColor';

export type { TailwindBgColors, TailwindTextColors };
