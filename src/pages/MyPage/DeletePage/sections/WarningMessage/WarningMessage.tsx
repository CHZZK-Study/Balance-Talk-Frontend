import React from 'react';
import {
  waringMessageTextStyling,
  warningMessageContainer,
} from './WarningMessage.style';
import Caution from '../../../../../assets/svg/Caution';

const WarningMessage = () => {
  return (
    <div css={warningMessageContainer}>
      <Caution />
      <span css={waringMessageTextStyling}>
        탈퇴 후 5일간 재가입이 불가능합니다.
        <br /> 탈퇴한 경우 게시글 및 댓글 삭제가 불가능합니다.
      </span>
    </div>
  );
};

export default WarningMessage;
