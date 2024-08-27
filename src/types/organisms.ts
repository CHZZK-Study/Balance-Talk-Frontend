import { OptionKeys } from '@/constants/optionSets';
import { ProfileIconProps, ProfileLabelProps, SelectGroupItem } from './atoms';
import { SideBoxProps } from './molecules';

export interface SideBarProps extends ProfileLabelProps, SideBoxProps {
  nickname: string;
  profileImageUrl?: ProfileIconProps['imgUrl'];
}

export interface OptionBarProps {
  selectGroupItems: SelectGroupItem[];
  initialSelectedGroupValue?: OptionKeys;
}
