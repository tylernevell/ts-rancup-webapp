type sizeType = 'large' | 'medium' | 'small' | 'tiny';

export interface UserProfilePicTypes {
  size?: sizeType;
  imgUrl?: string;
  alt?: string;
  className?: string;
}
