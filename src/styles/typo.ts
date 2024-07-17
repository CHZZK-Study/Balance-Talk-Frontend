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

  // TODO: 이전 타이포 타입 정리
  Heading_1: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '67.2px',
  },
  Heading_2: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '39.2px',
  },
  Heading_3: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '28px',
  },
  Heading_4: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '25.2px',
  },

  Body: {
    SemiBold_1: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
    },
    SemiBold_2: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '22.4px',
    },
    SemiBold_3: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '19.6px',
    },
    SemiBold_4: {
      fontSize: '13px',
      fontWeight: 600,
      lineHeight: '18.2px',
    },
    SemiBold_5: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16.8px',
    },
    SemiBold_6: {
      fontSize: '11px',
      fontWeight: 600,
      lineHeight: '15.4px',
    },
    Medium_1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22.4px',
    },
    Medium_2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '19.6px',
    },
    Medium_3: {
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '18.2px',
    },
    Medium_4: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16.8px',
    },
    Medium_5: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: '14.8px',
    },
    Regular_1: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16.8px',
    },
  },
} as const;

export default typo;
