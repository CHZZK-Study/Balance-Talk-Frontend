import React from 'react';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import PostInputForm from '@/components/organisms/PostInputForm/PostInputForm';
import Divider from '@/components/atoms/Divider/Divider';
import { useCreateTalkPickMutation } from '@/hooks/api/talk-pick/useCreateTalkPickMutation';
import * as S from './CreatePostPage.style';

const CreatePostPage = () => {
  const { mutate: createTalkPick, createSuccess } = useCreateTalkPickMutation();

  return (
    <div css={S.pageStyle}>
      <div css={S.bestTalkPickStyling}>
        {createSuccess && (
          <div css={S.toastModalStyling}>
            <ToastModal bgColor="black">작성 완료!</ToastModal>
          </div>
        )}
        <div css={S.bestTalkPickTextWrapper}>
          <div css={S.bestTalkPickSubTitle}>
            모두가 톡커도 되고 픽커도 되는 (두둥탁)
          </div>
          <div css={S.bestTalkPickTitle}>톡&픽 플레이스</div>
        </div>
        <Divider length={1175} orientation="width" />
      </div>

      <PostInputForm onSubmit={createTalkPick} />
    </div>
  );
};

export default CreatePostPage;
