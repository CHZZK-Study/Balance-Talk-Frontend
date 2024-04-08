import React from 'react';
import Heading from '@/components/design/Heading/Heading';
import {
  notfoundContainer,
  notfoundDescriptStyling,
} from './NotFoundPage.style';

const NotFoundPage = () => {
  return (
    <div css={notfoundContainer}>
      <Heading>404 - Not Found</Heading>
      <p css={notfoundDescriptStyling}>
        찾을 수 없는 페이지입니다. 입력하신 주소가 정확한지 확인해주세요.
      </p>
    </div>
  );
};

export default NotFoundPage;
