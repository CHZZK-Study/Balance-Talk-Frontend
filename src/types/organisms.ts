import { ProfileIconProps, ProfileLabelProps } from './atoms';
import { SideBoxProps } from './molecules';

export interface SideBarProps extends ProfileLabelProps, SideBoxProps {
  nickname: string;
  profileImageUrl?: ProfileIconProps['imgUrl'];
}
