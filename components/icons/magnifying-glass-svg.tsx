import { FunctionComponent } from 'react';
import type { SVGPropsType } from './types';

const MagnifyingGlassSVG: FunctionComponent<SVGPropsType> = (props) => {
  const { width = 16, height = 16, viewBox = '0 0 16 16', className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.206 12.617L14.296 15.703C14.686 16.099 15.316 16.099 15.706 15.703C16.098 15.308 16.098 14.669 15.706 14.273L12.626 11.193C13.496 10.025 14.013 8.577 14.013 7.007C14.013 3.137 10.876 0 7.007 0C3.137 0 0 3.137 0 7.007C0 10.877 3.137 14.014 7.007 14.014C8.582 14.014 10.036 13.494 11.206 12.617ZM7.006 12.012C4.243 12.012 2.002 9.772 2.002 7.007C2.002 4.243 4.242 2.002 7.007 2.002C9.771 2.002 12.011 4.242 12.011 7.007C12.011 9.771 9.771 12.012 7.008 12.012H7.006Z"
      />
    </svg>
  );
};

export { MagnifyingGlassSVG };
