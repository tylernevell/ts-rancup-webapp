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

    let classes = '';
    let pClasses = 'px-1';

  return (
    <div
      className={`flex items-center ${classes} ${className}`}
      >
          <Typography preset='heading6' className='w-8'>{ ranking }.</Typography>
          <UserProfilePic size='small' imgUrl={pfpURL}/>
          <Typography preset='paragraph1' className='pl-2'>{ username }</Typography>
    </div>
  );
};

export { UserRankingListItem };
