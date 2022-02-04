import { forwardRef } from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  ariaChecked?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    name = 'Text',
    value = 'text',
    checked,
    disabled,
    ariaChecked = false,
    onChange,
  } = props;

  const inputClasses =
    'h-5 w-5 self-center transition-all duration-200 ease-in-out cursor-pointer rounded ' +
    'checked:bg-primary-default checked:focus:bg-primary-default checked:hover:bg-primary-hover ' +
    'checked:active:focus:bg-primary-active checked:hover:focus:bg-primary-hover focus:ring-primary-default ' +
    'ring-gray-light ring-2 border-0 hover:bg-gray-lightest active:bg-gray-light disabled:cursor-not-allowed ' +
    'disabled:checked:bg-primary-disabled ';

  return (
    <label
      htmlFor={value}
      aria-labelledby="gdesc1"
      className="text-base inline-flex flex-nowrap gap-2.5 cursor-pointer "
    >
      <input
        type="checkbox"
        id={value}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        aria-checked={ariaChecked}
        onChange={onChange}
        className={inputClasses}
      />
      <span
        className={`${
          disabled
            ? 'cursor-not-allowed text-gray-default '
            : 'text-black-default '
        }`}
      >
        {name}
      </span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
