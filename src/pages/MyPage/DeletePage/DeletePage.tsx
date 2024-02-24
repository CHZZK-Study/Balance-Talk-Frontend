import React from 'react';
import { css } from '@emotion/react';
import InputPw from '../../../components/InputsUserInfo/InputPw';
import Button from '../../../components/common/Button/Button';
import Heading from '../../../components/common/Heading/Heading';
import Input from '../../../components/common/Input/Input';
import { Theme } from '../../../styles/Theme';
import Caution from '../../../assets/svg/Caution';
import { loginContainer } from '../../LoginPage/LoginPage.style';
import { btnSignup, inputContainer } from '../../SignUpPage/SignUpPage.style';

const DeletePage = () => {
  return (
    <div css={loginContainer}>
      <Heading size="medium">회원 탈퇴</Heading>
      <div css={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
        <Caution />
        <span
          css={css({
            color: Theme.color.red,
            fontSize: Theme.text.xSmall.fontSize,
            lineHeight: Theme.text.xSmall.lineHeight,
            fontWeight: 600,
          })}
        >
          탈퇴 후 5일간 재가입이 불가능합니다.
          <br /> 탈퇴한 경우 게시글 및 댓글 삭제가 불가능합니다.
        </span>
      </div>

      <div css={inputContainer}>
        <Input
          placeholder="Username@gamil.com"
          disabled
          isDisabled
          size="medium"
          label="이메일"
          css={css({
            width: '420px',
          })}
        />
        <InputPw />
      </div>

      <Button size="large" css={btnSignup}>
        탈퇴
      </Button>
    </div>
  );
};

export default DeletePage;
