const typo = {
  Title: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '1.4',
    letterSpacing: `${40 * -0.05}px`,
  },
  SubTitle: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '1.4',
    letterSpacing: `${24 * -0.05}px`,
  },
  Component: {
    Bold: {
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: '1.4',
      letterSpacing: `${30 * -0.05}px`,
    },
    Medium: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '1.4',
      letterSpacing: `${24 * -0.05}px`,
    },
  },
  Main: {
    SemiBold: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '1.4',
      letterSpacing: `${18 * -0.05}px`,
    },
    Medium: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '1.4',
      letterSpacing: `${18 * -0.05}px`,
    },
  },
  Comment: {
    SemiBold: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1.4',
      letterSpacing: `${16 * -0.05}px`,
    },
    Regular: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '1.4',
      letterSpacing: `${16 * -0.05}px`,
    },
  },
  Number: {
    Medium_18: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '1.4',
      letterSpacing: `${18 * -0.05}px`,
    },
    Medium: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '1.4',
      letterSpacing: `${16 * -0.05}px`,
    },
    Regular: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '1.4',
      letterSpacing: `${16 * -0.05}px`,
    },
  },
} as const;

export default typo;
