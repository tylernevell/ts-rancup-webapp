import { FunctionComponent } from 'react';
import { FadeInVisible } from '../fade-in-visible/fade-in-visible';

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const Container: FunctionComponent<PropsType> = (props) => {
  const { children, className = '' } = props;
  return (
    <section className={`container mx-auto pt-2 lg:pb-48 pb-24 ${className}`}>
      <div className="w-full mx-auto max-w-screen-xl">
        <FadeInVisible>{children}</FadeInVisible>
      </div>
    </section>
  );
};

export { Container };
