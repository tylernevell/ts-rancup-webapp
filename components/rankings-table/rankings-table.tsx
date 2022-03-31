import { useEffect, useState } from 'react';
import { useHttpRequest } from '../../hooks/use-http-request/use-http-request';
import { Container } from '../container/container';
import { RankingsRow } from '../rankings-row/rankings-row';

const RankingsTable = () => {
  const {
    isLoading,
    error,
    sendRequest: sendRankingsRequest,
  } = useHttpRequest();

  const [playersList, setPlayersList] = useState<Array<any>>();

  useEffect(() => {
    const controller = new AbortController();

    const fetchRankings = async () => {
      const transformReturnObject = (returnedObject: any) => {
        console.log(returnedObject.results);
        setPlayersList(returnedObject.results);
      };

      sendRankingsRequest(
        {
          url: 'https://api.rancup.com/RancUpCore/api/FantasyFootball/getrankings',
          method: 'POST',
          headers: {
            Authorization:
              'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRoYXJ2ZXkiLCJuYW1laWQiOiIxZDJiYjY3Ny1lM2ViLTQ5OGYtYjk3OC03YWYyZDAxYTY0MDgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiNzIiLCJuYmYiOjE2MTE3ODA4NjUsImV4cCI6MTYxMTc4NDQ2NSwiaWF0IjoxNjExNzgwODY1LCJpc3MiOiJDb2RlQmxvY2tzIn0.mRyMoYK_lKkVBe6xODWpn9KqgW1eUY0m_QSxKnv4mNw',
            Accept:
              'application/json, text/json, text/x-json, text/javascript, application/xml, text/xml',
            'Content-Type': 'application/json',
          },
          body: {
            Page: 1,
            PageSize: 5,
            OrderBy: 1,
            PlayerPosition: 'QB',
            Week: 17,
            UserID: 10,
            Season: 2021,
          },
        },
        transformReturnObject
      );
    };
    fetchRankings();
    return () => controller.abort();
  }, []);

  return (
    <table className="ml-0 pl-0">
      <tr className="flex text-black font-semibold">
        <td className="w-10"></td>
        <td className="w-44 pl-4 sm:pl-0 sm:w-48 text-center">PLAYER</td>
        <td className="w-6 sm:w-16 text-center pl-2">OPP</td>
        <td className="invisible w-0 sm:visible h-full sm:w-[3.2rem] sm:text-center sm:pl-1">
          BEST
        </td>
        <td className="invisible w-0 sm:visible h-full sm:w-[3.2rem] sm:text-center sm:pl-[2px]">
          WORST
        </td>
        <td className="invisible w-0 sm:visible h-full sm:w-[3.2rem] sm:text-center sm:pl-2">
          AVG
        </td>
      </tr>
      {playersList?.map((player) => (
        <RankingsRow
          key={player.id}
          src={player.pictureUrl}
          shortName={player.shortName}
          team={player.teamName}
          isAway={player.isAway}
          oppTeam={player.oppositeTeamName}
          gameDay={player.gameDay}
          gameHour={player.gameHour}
          myRank={player.myRank}
          playerAverage={player.playerAverage}
        />
      ))}
    </table>
  );
};

export { RankingsTable };
