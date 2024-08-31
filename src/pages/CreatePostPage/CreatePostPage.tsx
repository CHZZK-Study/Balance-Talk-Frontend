/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import PostInputForm from '@/components/organisms/PostInputForm/PostInputForm';
import Divider from '@/components/atoms/Divider/Divider';
import { useCreateTalkPickMutation } from '@/hooks/api/talk-pick/useCreateTalkPickMutation';
import { useSaveTempTalkPickMutation } from '@/hooks/api/talk-pick/useSaveTempTalkPickMutation';
import * as S from './CreatePostPage.style';

const CreatePostPage = () => {
  const [showSaveSuccessToast, setShowSaveSuccessToast] = useState(false);
  const { mutate: createTalkPick, createSuccess } = useCreateTalkPickMutation();
  const { mutate: saveTempTalkPick, saveSuccess } =
    useSaveTempTalkPickMutation();

  useEffect(() => {
    if (saveSuccess) {
      setShowSaveSuccessToast(true);
      const timer = setTimeout(() => {
        setShowSaveSuccessToast(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [saveSuccess]);

  return (
    <div css={S.pageStyle}>
      <div css={S.bestTalkPickStyling}>
        {createSuccess && (
          <div css={S.toastModalStyling}>
            <ToastModal bgColor="black">등록 완료!</ToastModal>
          </div>
        )}
        {showSaveSuccessToast && (
          <div css={S.toastModalStyling}>
            <ToastModal bgColor="black">임시저장 완료!</ToastModal>
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

      <PostInputForm onSubmit={createTalkPick} onSave={saveTempTalkPick} />
    </div>
  );
};

export default CreatePostPage;
