import { CenterWrapper } from '../wrappers/center-wrapper';

const RankingsNav = () => {
  return (
    <CenterWrapper>
      <nav className="text-gray-dark ml-3">
        <ul className="flex flex-row flex-wrap justify-center items-center gap-x-3">
          <li>Week</li>
          <li>QB</li>
          <li>RB</li>
          <li>WR</li>
          <li>TE</li>
          <li>K</li>
          <li>DEF</li>
          <li>00</li>
          <li>Share</li>
        </ul>
      </nav>
    </CenterWrapper>
  );
};

export { RankingsNav };
