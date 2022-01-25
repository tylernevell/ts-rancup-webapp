import type { ChangeEvent, FunctionComponent } from 'react';
import { Typography } from '../../typography/typography';

type PropsType = {
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  placeholder: string;
  label: string;
  // eslint-disable-next-line react/require-default-props
  required?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const TextField: FunctionComponent<PropsType> = (props) => {
  const { type, placeholder, label, required = false, onChange } = props;
  return (
    <>
      <div>
        <label htmlFor={type} className="block">
          <Typography
            variant="span"
            color="text-primary-default"
            size="text-sm"
          >
            {label}
          </Typography>
          <div className="mt-1">
            <input
              type={type}
              name={type}
              className="shadow-sm focus:ring-primary-focus focus:border-primary-focus block w-full sm:text-sm border-tertiary-default font-sans"
              placeholder={placeholder}
              required={required}
              onChange={onChange}
            />
          </div>
        </label>
      </div>
    </>
  );
};

export { TextField };
