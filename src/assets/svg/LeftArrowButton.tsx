import React from 'react';

const LeftArrowButton = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.8"
        cx="25"
        cy="25"
        r="25"
        transform="rotate(-180 25 25)"
        fill="#EEEEEE"
      />
      <g opacity="0.8">
        <path
          d="M28.09 17.08L21.57 23.6C20.8 24.37 20.8 25.63 21.57 26.4L28.09 32.92"
          stroke="#222831"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LeftArrowButton;
