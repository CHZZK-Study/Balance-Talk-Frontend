import { PATH } from '@/constants/path';
import { useTokenRefresh } from '@/hooks/common/useTokenRefresh';
import { Member } from '@/types/member';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  member?: Member;
};

const ProtectedRoutes = ({ member }: Props) => {
  useTokenRefresh();

  return member ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};

export default ProtectedRoutes;
