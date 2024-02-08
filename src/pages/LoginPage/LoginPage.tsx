import React from 'react';
import { css } from '@emotion/react';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import { container, inputContainer, loginContainer } from './LoginPage.style';
import Key from '../../assets/svg/Key';
import Email from '../../assets/svg/Email';
import Button from '../../components/Button/Button';

const LoginPage = () => {
  const isError: boolean = true;
  return (
    <div css={container}>
      <div css={loginContainer}>
        <Heading css={css({ fontWeight: '600' })} size="large">
          LOGIN
        </Heading>

        <div css={inputContainer}>
          <Input placeholder="이메일" size="medium" icon={<Email />} />
          <Input
            placeholder="비밀번호"
            size="medium"
            icon={<Key />}
            isError={isError}
            errorMessage={
              isError
                ? '이메일 또는 비밀번호가 일치하지 않습니다. 다시 확인해주세요.'
                : undefined
            }
          />
        </div>

        <Button size="large" css={css({ width: '100%' })}>
          로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
