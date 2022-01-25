import { AriaAttributes, forwardRef } from 'react';
import { Typography } from '../typography/typography';

type ButtonTypes = 'default' | 'primary' | 'danger' | 'success';

type ButtonPropTypes = {
  children?: React.ReactNode;
  type: 'submit' | 'button' | 'reset' | undefined;
  buttonType?: ButtonTypes;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  href?: string;
  dataToggle?: string;
  ariaHasPopup?: AriaAttributes['aria-haspopup'];
  ariaExpanded?: AriaAttributes['aria-expanded'];
  // ref?: React.Ref<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
  disabled?: boolean;
  buttonWidth?: 'full' | 'responsive';
  buttonHeight?: 'small' | 'medium' | 'large';
  dataAction?: DOMStringMap;
  dataId?: string;
  dataReview?: string;
  id?: string;
  name?: string;
};

type RefType = HTMLButtonElement;

const Button = forwardRef<RefType, ButtonPropTypes>((props, ref) => {
  const {
    children = <Typography>Button</Typography>,
    type = 'button',
    buttonType = 'default',
    ariaLabel,
    onClick,
    dataToggle,
    ariaHasPopup,
    ariaExpanded,
    disabled = false,
    buttonWidth = 'responsive',
    buttonHeight = 'medium',
    dataAction,
    dataId,
    id,
    name,
  } = props;

  let buttonTypeClasses =
    'grid gap-2 grid-flow-col items-center justify-center whitespace-nowrap ' +
    'text-sm rounded-sm outline-none focus:outline-none transition-all ' +
    'duration-200 ease-in-out disabled:bg-button-background-disabled ' +
    'disabled:cursor-not-allowed drop-shadow-sm shadow font-medium ';

  switch (buttonType) {
    case 'primary':
      buttonTypeClasses +=
        'px-3 py-1 shadow-sm text-white bg-primary-default ' +
        'hover:bg-primary-hover active:bg-button-background-primary-pressed ' +
        'active:border-gray-400 focus:outline-none focus:ring-2 focus:border-teal-500 ' +
        'focus:border-transparent disabled:bg-button-background-disabled ';
      break;
    case 'danger':
      buttonTypeClasses +=
        'px-3 py-1 shadow-sm bg-action-critical hover:bg-action-critical-hover ' +
        'active:bg-action-critical-pressed active:border-gray-400 focus:outline-none ' +
        'focus:ring-2 focus:border-teal-500 focus:border-transparent disabled:bg-button-background-disabled ';
      break;
    default:
      buttonTypeClasses +=
        'px-3 py-1 shadow-sm bg-tertiary-default border hover:bg-tertiary-hover ' +
        'active:bg-tertiary-active active:border-gray-400 focus:outline-none focus:ring-2 ' +
        'focus:border-teal-500 focus:border-transparent disabled:bg-button-background-disabled ';
  }

  switch (buttonHeight) {
    case 'small':
      buttonTypeClasses += 'h-7 ';
      break;
    case 'large':
      buttonTypeClasses += 'h-10 ';
      break;
    default:
      buttonTypeClasses += 'h-8 ';
  }

  buttonTypeClasses += buttonWidth === 'responsive' ? '' : 'w-full';

  return (
    <button
      data-toggle={dataToggle}
      data-action={dataAction}
      data-id={dataId}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      id={id}
      name={name}
      ref={ref}
      className={buttonTypeClasses}
      type={type}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonPropTypes, ButtonTypes, RefType };
