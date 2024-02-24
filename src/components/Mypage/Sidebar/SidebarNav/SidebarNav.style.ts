import { Theme } from '../../../../styles/Theme';

export const sidebarNavStyling = (isSelected: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '40px 0px',
  gap: '10px',
  transition: 'all .2s ease-in',
  cursor: 'pointer',

  '& p': {
    color: isSelected ? Theme.color.colorHunt_gray : Theme.color.gray400,
    fontWeight: isSelected ? '600' : '400',
  },
  '& svg': {
    fill: isSelected ? Theme.color.colorHunt_gray : Theme.color.gray400,
  },

  '&:hover': {
    '& p': {
      color: Theme.color.colorHunt_gray,
      fontWeight: '600',
    },
    '& svg': {
      fill: Theme.color.colorHunt_gray,
    },
  },
});
