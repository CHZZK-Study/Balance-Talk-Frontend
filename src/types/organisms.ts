import { OptionKeys } from '@/constants/optionSets';
import { ProfileIconProps, ProfileLabelProps, SelectGroupItem } from './atoms';
import {
  ContentsButtonProps,
  InfoBoxProps,
  MyContentBoxProps,
  SideBoxProps,
} from './molecules';

export interface SideBarProps extends ProfileLabelProps, SideBoxProps {
  nickname: string;
  profileImageUrl?: ProfileIconProps['imgUrl'];
}

export interface OptionBarProps {
  selectGroupItems: SelectGroupItem[];
  initialSelectedGroupValue?: OptionKeys;
  selectedOption: string;
  onGroupSelect: (value: OptionKeys) => void;
  onOptionSelect: (option: string) => void;
}

export interface InfoItem extends InfoBoxProps {
  id: number;
  editedAt: string;
}

export interface InfoListProps {
  items: InfoItem[];
}

export interface MyContentItem extends MyContentBoxProps {
  id: number;
  editedAt: string;
}

export interface MyContentListProps {
  items: MyContentItem[];
}

export interface MyBalanceGameItem extends Omit<ContentsButtonProps, 'id'> {
  id: number;
  editedAt: string;
}

export interface MyBalanceGameListProps {
  items: MyBalanceGameItem[];
}
