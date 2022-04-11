import { ReactNode } from 'react';

interface ContentWrapperTypes {
  children: ReactNode;
}

const CenterWrapper = (props: ContentWrapperTypes) => {
  const { children } = props;

  return (
    <div className="inline-flex border-2 border-gray-light rounded-lg bg-white-default py-4 pr-3">
      {children}
    </div>
  );
};

export { CenterWrapper };
