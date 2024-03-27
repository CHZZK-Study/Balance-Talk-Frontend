import { PATH } from '@/constants/path';
import { Member } from '@/types/member';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  member?: Member;
};

const ProtectedRoutes = ({ member }: Props) => {
  return member ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};

export default ProtectedRoutes;
