import React from 'react';
import Heading from '../../../components/design/Heading/Heading';
import { loginContainer } from '../../LoginPage/LoginPage.style';
import DeleteForm from './sections/DeleteForm/DeleteForm';
import WarningMessage from './sections/WarningMessage/WarningMessage';

const DeletePage = () => {
  return (
    <div css={loginContainer}>
      <Heading size="medium">회원 탈퇴</Heading>
      <WarningMessage />
      <DeleteForm />
    </div>
  );
};

export default DeletePage;
