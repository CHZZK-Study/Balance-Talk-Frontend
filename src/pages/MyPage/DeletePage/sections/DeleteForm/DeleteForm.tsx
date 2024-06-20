import React from 'react';
import ErrorMessage from '@/components/design/ErrorMessage/ErrorMessage';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { css } from '@emotion/react';
import InputPw from '../../../../../components/common/InputsUserInfo/InputPw';
import Button from '../../../../../components/common/Button/Button';
import Input from '../../../../../components/design/Input/Input';
import { useMemberDelete } from '../../../../../hooks/mypage/memberDelete/useMemberDelete';
import {
  btnUserDelete,
  formContainer,
  inputContainer,
} from './DeleteForm.style';

const DeleteForm = () => {
  const { sub } = useParseJwt(useNewSelector(selectAccessToken));
  const { form, onChange, onSuccessChange, handleSubmit, errorMessage } =
    useMemberDelete();

  return (
    <form onSubmit={handleSubmit} css={formContainer}>
      <div css={inputContainer}>
        <Input
          placeholder={sub}
          disabled
          isDisabled
          size="medium"
          label="이메일"
          css={css({
            width: '420px',
          })}
        />
        <InputPw
          value={form.password}
          onChange={onChange}
          onSuccessChange={onSuccessChange}
        />
      </div>

      {errorMessage && <ErrorMessage isError>{errorMessage}</ErrorMessage>}

      <Button type="submit" size="large" css={btnUserDelete}>
        탈퇴
      </Button>
    </form>
  );
};

export default DeleteForm;
