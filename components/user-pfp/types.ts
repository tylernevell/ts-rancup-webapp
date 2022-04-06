type sizeType = 'large' | 'medium' | 'small';

export interface UserProfilePicTypes {
  size?: sizeType;
  imgUrl?: string;
  alt?: string;
  className?: string;
}
