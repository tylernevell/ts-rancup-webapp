import { useRouter } from 'next/router';
import type { FunctionComponent, ReactNode } from 'react';
import { memo } from 'react';
import { NavBar } from '../navbar/navbar';

type PropsType = {
  children: ReactNode;
};

const GlobalLayout: FunctionComponent<PropsType> = ({ children }) => {
  const router = useRouter();
  return (
    <main>
      {router.asPath === '/' ? '' : <NavBar />}
      <div className="flex flex-wrap h-full w-full">{children}</div>
      {/* {router.asPath === '/' ? '' : <Footer />} */}
    </main>
  );
};

const MemoGlobalLayout = memo(GlobalLayout);

export { MemoGlobalLayout as GlobalLayout };
