const color = {
  colorHunt_yellow: '#FFD369',
  colorHunt_white: '#EEEEEE',
  colorHunt_black: '#222831',
  colorHunt_gray: '#393E46',
  gray100: '#FAFAFA',
  gray200: '#EEEEEE',
  gray300: '#D9D9D9',
  gray400: '#ADADAD',
  red: '#FF0000',
  green: '#20AA26',
  white: '#FFFFFF',
  black: '#000000',
} as const;

const text = {
  large: {
    fontSize: '24px',
    lineHeight: '28px',
  },
  medium: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  small: {
    fontSize: '15px',
    lineHeight: '20px',
  },
  xSmall: {
    fontSize: '12px',
    lineHeight: '20px',
  },
} as const;

const heading = {
  xxLarge: {
    fontSize: '48px',
    lineHeight: '52px',
  },
  xLarge: {
    fontSize: '44px',
    lineHeight: '44px',
  },
  large: {
    fontSize: '40px',
    lineHeight: '40px',
  },
  medium: {
    fontSize: '28px',
    lineHeight: '36px',
  },
  small: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  xSmall: {
    fontSize: '20px',
    lineHeight: '28px',
  },
} as const;

// eslint-disable-next-line import/prefer-default-export
export const Theme = {
  color,
  text,
  heading,
};

const mediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: mediaQuery,
  mobile: mediaQuery(640),
  tablet: mediaQuery(768),
  laptop: mediaQuery(1024),
  desktop: mediaQuery(1280),
};
