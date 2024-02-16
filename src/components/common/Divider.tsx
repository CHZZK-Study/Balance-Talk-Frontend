import { css } from '@emotion/react';
import React from 'react';
import { Theme } from '../../styles/Theme';

const Divider = () => {
  return (
    <div
      css={css({
        borderLeft: `1px solid ${Theme.color.gray300}`,
      })}
    />
  );
};

export default Divider;
