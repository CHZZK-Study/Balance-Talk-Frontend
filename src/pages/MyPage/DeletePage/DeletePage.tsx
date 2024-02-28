import React from 'react';
import { css } from '@emotion/react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import Caution from '../../../assets/svg/Caution';
import InputPw from '../../../components/InputsUserInfo/InputPw';
import Button from '../../../components/design/Button/Button';
import Heading from '../../../components/design/Heading/Heading';
import Input from '../../../components/design/Input/Input';
import { END_POINT } from '../../../constants/api';
import { Theme } from '../../../styles/Theme';
import { loginContainer } from '../../LoginPage/LoginPage.style';
import { btnSignup, inputContainer } from '../../SignUpPage/SignUpPage.style';
import { Member } from '../../../types/mypage';
import { axiosInstance } from '../../../api/interceptor';

const DeletePage = () => {
  const { data: member }: UseQueryResult<Member, Error> = useQuery({
    queryKey: ['member'],
    queryFn: async () => {
      const res = await axiosInstance.get<Member>(END_POINT.GET_MEMBER(1), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div css={loginContainer}>
      {member && <span>{member.nickname}</span>}
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
