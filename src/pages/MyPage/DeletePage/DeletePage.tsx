import React from 'react';
import { css } from '@emotion/react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../api/interceptor';
import Caution from '../../../assets/svg/Caution';
import Heading from '../../../components/design/Heading/Heading';
import { END_POINT } from '../../../constants/api';
import { Theme } from '../../../styles/Theme';
import { Member } from '../../../types/mypage';
import { loginContainer } from '../../LoginPage/LoginPage.style';
import DeleteForm from './sections/DeleteForm/DeleteForm';

const DeletePage = () => {
  const { data: member }: UseQueryResult<Member, Error> = useQuery({
    queryKey: ['member'],
    queryFn: async () => {
      const res = await axiosInstance.get<Member>(END_POINT.MEMBER(1), {
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

      <DeleteForm />
    </div>
  );
};

export default DeletePage;
