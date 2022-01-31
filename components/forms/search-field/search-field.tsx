import { forwardRef, useState } from 'react';
import { Button } from '../../button/button';
import { MagnifyingGlassSVG } from '../../icons/magnifying-glass-svg';
import { Shadow } from '../../shadows/shadow';

interface SearchFieldProps {
  placeholder: string;
  id: string;
  name: string;
  validationFunction: (value: string) => boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    const { placeholder, id, name, validationFunction = () => true } = props;

    const [enteredValue, setEnteredValue] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [formIsEntered, setFormIsEntered] = useState(false);
    const [isNotTouchedYet, setIsNotTouchedYet] = useState(true);

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredValue(e.target.value);
    };

    const focusHandler = () => {
      setIsNotTouchedYet(false);
    };

    const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormIsEntered(true);
      setFormIsValid(validationFunction(e.target.value));
    };

    return (
      <Shadow shadowType={formIsValid === formIsEntered ? 'default' : 'error'}>
        <div
          className={`${
            formIsValid === formIsEntered
              ? 'bg-white-transparent'
              : 'bg-red-light'
          } flex w-full sm:w-80 h-11 pt-0 rounded border-0 transition-all duration-200 ease-in-out cursor-text`}
        >
          <Button
            type="submit"
            buttonType="flat"
            buttonHeight="large"
            className="w-10 flex-none"
          >
            <MagnifyingGlassSVG />
          </Button>

          <input
            type="text"
            ref={ref}
            id={id}
            name={name}
            value={enteredValue}
            placeholder={placeholder}
            onChange={valueChangeHandler}
            onFocus={focusHandler}
            onBlur={validationHandler}
            className={`${
              isNotTouchedYet ? '' : ''
            } flex-auto w-full placeholder:text-gray-default border-0 p-0 mt-0 text-base text-black-default bg-transparent focus:outline-transparent border-transparent focus:border-transparent focus:ring-0`}
          />
        </div>
      </Shadow>
    );
  }
);

SearchField.displayName = 'SearchField';

export { SearchField };
