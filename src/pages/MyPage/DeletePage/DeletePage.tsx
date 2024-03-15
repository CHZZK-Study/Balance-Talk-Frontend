import React from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../api/interceptor';
import Heading from '../../../components/design/Heading/Heading';
import { END_POINT } from '../../../constants/api';
import { Member } from '../../../types/history';
import { loginContainer } from '../../LoginPage/LoginPage.style';
import DeleteForm from './sections/DeleteForm/DeleteForm';
import WarningMessage from './sections/WarningMessage/WarningMessage';

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
      <WarningMessage />
      <DeleteForm />
    </div>
  );
};

export default DeletePage;
