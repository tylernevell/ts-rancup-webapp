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
      width = 36;
      height = 36;
      classes += 'w-9 h-9';
      break;

    case 'large':
      width = 64;
      height = 64;
      classes += 'w-16 h-16';
      break;

    default:
      width = 48;
      height = 48;
      classes += 'w-12 h-12';
      break;
  }

  return (
    <div
      className={`rounded-full bg-primary-default p-0.5 ${classes} ${className}`}
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
