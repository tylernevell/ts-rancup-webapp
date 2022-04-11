import { UserProfilePic } from '../user-pfp/user-pfp';
import { Typography } from '../typography/typography';

interface RankingPropTypes {
  ranking?: number;
  username?: string;
  pfpURL?: string;
  className?: string;
}

const UserRankingListItem = (props: RankingPropTypes) => {
  const {
    ranking = 1,
    username = 'User Name 1234',
    pfpURL = 'https://rancupstorage.blob.core.windows.net/nflplayers/grayprofile.png',
    className = '',
  } = props;

  return (
    <div className={`flex items-center ${className}`}>
      <Typography preset="custom" className="w-6 text-gray-dark">
        {ranking}.
      </Typography>
      <UserProfilePic size="tiny" imgUrl={pfpURL} />
      <Typography preset="custom" className="ml-2 font-medium text-gray-dark">
        {username}
      </Typography>
    </div>
  );
};

export { UserRankingListItem };
