import React, { SetStateAction, useEffect, useRef } from 'react';
import Button from '@/components/design/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useSelectedOptionsInLocalStorage } from '@/hooks/vote/useSelectedOptionsInLocalStorage';
import { useMutation } from '@tanstack/react-query';
import { changeBalanceOption, voteBalanceOption } from '@/api/votes/vote';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import {
  ChagneVoteModalWrapper,
  ChangeVoteModalWrapper,
  btnsWrapper,
  titleWrapper,
} from './ChangeVoteModal.style';

interface LoginModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  postId: number;
}

const ChangeVoteModal = ({ handleModal, postId }: LoginModalProps) => {
  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  const changeVoteModalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        changeVoteModalRef.current &&
        !changeVoteModalRef.current.contains(event.target as Node)
      ) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [changeVoteModalRef, handleModal]);

  return (
    <div ref={changeVoteModalRef} css={ChangeVoteModalWrapper}>
      <div css={titleWrapper}>
        {member
          ? '선택지를 바꾸시겠습니까?'
          : '비회원은 선택지를 바꿀 수 없습니다.'}
      </div>
      <div css={btnsWrapper}>
        {member ? (
          <>
            <Button variant="cancel" onClick={() => handleModal(false)}>
              다음에 하기
            </Button>
            <Button onClick={() => {}}>선택지 변경하기</Button>
          </>
        ) : (
          <Button variant="cancel" onClick={() => handleModal(false)}>
            닫기
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChangeVoteModal;
