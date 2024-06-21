import React, { SetStateAction, useEffect, useRef } from 'react';
import Button from '@/components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useNewSelector } from '@/store';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { selectAccessToken } from '@/store/auth';
import { Rank } from '@/assets';
import { getYearMonthDay } from '@/utils/date';
import { useMemberProfileQuery } from '@/hooks/api/useMemberProfileQuery';
import {
  profileModalWrapper,
  profileBackgroundWrapper,
  profileInfoWrapper,
  profileRankWrapper,
  profileTextWrapper,
  btnsWrapper,
  blankWrapper,
} from './ProfileModal.style';
import defaultProfile from '../../../../assets/images/defaultProfile.png';
import ProfileImage from '../../Profile/ProfileImage/ProfileImage';
import ProfileInfo from '../../Profile/ProfileInfo';

interface ProfileModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  creatorId: number;
}

const ProfileModal = ({ handleModal, creatorId }: ProfileModalProps) => {
  const profileModalRef = useRef<HTMLDivElement>(null);
  const accessToken = useNewSelector(selectAccessToken);
  const { memberProfile: creator } = useMemberProfileQuery(creatorId);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);

  const navigate = useNavigate();

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(event.target as Node)
      ) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [profileModalRef, handleModal]);
  if (!creator) return null;

  return (
    <div ref={profileModalRef} css={profileModalWrapper}>
      {creator && (
        <>
          <div css={blankWrapper} />
          <div css={profileBackgroundWrapper} />
          <ProfileImage
            src={
              creator?.profileImageUrl
                ? creator?.profileImageUrl
                : defaultProfile
            }
            size="large"
            isOutline
          />

          <ProfileInfo title={`가입일: ${getYearMonthDay(creator?.createdAt)}`}>
            <p css={profileTextWrapper}>{creator?.nickname}</p>
          </ProfileInfo>
          <div css={profileInfoWrapper}>
            <ProfileInfo title="작성한 게시글">
              <p css={profileTextWrapper}>{creator?.postsCount}</p>
            </ProfileInfo>
            <ProfileInfo title="추천 수">
              <p css={profileTextWrapper}>{creator?.totalPostLike}</p>
            </ProfileInfo>
            <ProfileInfo title="등급">
              <Rank css={profileRankWrapper(creator?.level)} />
            </ProfileInfo>
          </div>
        </>
      )}
      <div css={btnsWrapper}>
        {member?.id === creatorId && (
          <Button onClick={() => navigate(`../${PATH.MYPAGE}/history/posts`)}>
            마이페이지
          </Button>
        )}
        <Button variant="cancel" onClick={() => handleModal(false)}>
          닫기
        </Button>
      </div>
    </div>
  );
};

export default ProfileModal;
