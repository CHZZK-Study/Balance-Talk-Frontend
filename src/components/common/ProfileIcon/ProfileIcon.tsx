/* eslint-disable react/react-in-jsx-scope */
import NormalProfile from '@/assets/svg/NormalProfile';
import image from '@/assets/images/logo.png';
import { profileImage, profileWrapper } from './ProfileIcon.style';

export interface ProfileProps {
  interaction?: 'normal' | 'settings';
}

const ProfileIcon = ({ interaction = 'normal' }: ProfileProps) =>
  interaction === 'normal' ? (
    <NormalProfile />
  ) : (
    <div css={profileWrapper}>
      <img css={profileImage} src={image} alt="profile" />
    </div>
  );

export default ProfileIcon;
