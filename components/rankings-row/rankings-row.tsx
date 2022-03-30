import { Typography } from '../typography/typography';

/* eslint-disable @next/next/no-img-element */
interface RankingsRowProps {
  src: string;
  shortName: string;
  team: string;
  isAway: boolean;
  oppTeam: string;
  gameDay: string;
  gameHour: string;
  myRank: number;
  playerAverage: { bestRank: number; worstRank: number; averageRank: number };
}

const RankingsRow = (props: RankingsRowProps) => {
  const {
    src = 'https://rancupstorage.blob.core.windows.net/nflplayers/chris_streveler.png',
    shortName = 'C. Streveler',
    team = 'MIA',
    isAway = false,
    oppTeam = 'TEN',
    gameDay = 'Sun',
    gameHour = '1:00',
    myRank = 101,
    playerAverage = { bestRank: 47, worstRank: 604, averageRank: 112.05 },
  } = props;

  playerAverage.averageRank = Math.round(playerAverage.averageRank);

  return (
    <tr className="flex h-[3.2rem] mb-4">
      <td className="w-10 text-black font-semibold flex items-center justify-center">
        {myRank}
      </td>
      <div className="inline-flex bg-gray-lighter border-gray-light border-2 ">
        <td className="w-16 self-end pr-1">
          <img src={src} alt={shortName} className="" />
        </td>
        <td className="h-full w-24 sm:w-32 border-r-2 border-gray-light">
          <ul className="list-none">
            <li className="font-semibold truncate">{shortName}</li>
            <li className="text-gray-dark">{team}</li>
          </ul>
        </td>
        <td className="h-full w-16 sm:border-r-2 sm:border-gray-light pb-1">
          <ul className="list-none text-center pt-1">
            <li className="text-sm text-black-default">
              {isAway ? 'at ' : 'vs '}
              {oppTeam}
            </li>
            <li className="text-sm text-gray-dark">
              {gameDay} {gameHour}
            </li>
          </ul>
        </td>
        <td className="invisible w-0 sm:visible h-full sm:w-[3.2rem] border-r-2 border-gray-light flex items-center	justify-center">
          <Typography preset="custom" size="text-lg" className="text-center">
            {playerAverage.bestRank}
          </Typography>
        </td>
        <td className="invisible w-0 sm:visible h-full sm:w-[3.2rem] border-r-2 border-gray-light flex items-center	justify-center">
          <Typography preset="custom" size="text-lg" className="text-center">
            {playerAverage.worstRank}
          </Typography>
        </td>
        <td className="invisible w-0 sm:visible h-full sm:w-[3.2rem] flex items-center justify-center">
          <Typography preset="custom" size="text-lg" className="text-center">
            {playerAverage.averageRank}
          </Typography>
        </td>
      </div>
    </tr>
  );
};

export { RankingsRow };
