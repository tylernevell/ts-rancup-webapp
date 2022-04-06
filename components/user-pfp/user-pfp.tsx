// large profile pic
// medium profile pic
// small profile pic
import Image from 'next/image';
import { UserProfilePicTypes } from './types';

const UserProfilePic = (props: UserProfilePicTypes) => {
  const {
    size = 'medium',
    imgUrl = 'https://rancupstorage.blob.core.windows.net/nflplayers/grayprofile.png',
    alt = '',
    className = '',
  } = props;

  let classes = '';
  let width, height;
  switch (size) {
    case 'small':
      classes += '';
      width = 36;
      height = 36;
      break;

    case 'large':
      width = 64;
      height = 64;
      break;

    default:
      width = 48;
      height = 48;
      break;
  }

  return (
    <div
      className={`rounded-full bg-red-700 w-12 h-12 ${classes} ${className}`}
    >
      <Image
        src={imgUrl}
        alt={alt}
        className={`overflow-hidden inset-0 w-full h-full rounded-full p-3`}
        width={width}
        height={height}
      />
    </div>
  );
};

export { UserProfilePic };
