import React, { useState } from 'react';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import { CommentsPagination } from '@/types/comment';
import Pagination from '@/components/atoms/Pagination/Pagination';
import TextArea from '@/components/molecules/TextArea/TextArea';
import Toggle from '@/components/atoms/Toggle/Toggle';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import ToggleGroup, {
  ToggleGroupItem,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import { createRangeArray } from '@/utils/array';
import CommentItem from '@/components/molecules/CommentItem/CommentItem';
import { useCreateCommentMutation } from '@/hooks/api/comment/useCreateCommentMutation';
import * as S from './CommentsSection.style';

export interface CommentsSectionProps {
  talkPickId: number;
  talkPickWriter: string;
  commentList?: CommentsPagination;
  toggleItem: ToggleGroupItem[];
  selectedValue: string;
  setToggleValue: React.Dispatch<React.SetStateAction<string>>;
  selectedPage: number;
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
  voted: boolean;
}

const CommentsSection = ({
  talkPickId,
  talkPickWriter,
  commentList,
  toggleItem,
  selectedValue,
  setToggleValue,
  selectedPage,
  handlePageChange,
  voted,
}: CommentsSectionProps) => {
  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);
  const isMyTalkPick: boolean = talkPickWriter === member?.nickname;

  const pages = createRangeArray(selectedPage, commentList?.totalPages || 0);
  const [commentValue, setCommentValue] = useState<string>('');

  const { mutate: createComment } = useCreateCommentMutation(talkPickId);

  const handleCommentButton = () => {
    createComment({ content: commentValue });
    setCommentValue('');

    if (selectedValue === 'trend') setToggleValue('recent');
  };

  return (
    <div css={S.commentsSectionContainer}>
      <div css={S.commentTopWrapper}>
        <Toggle count={commentList?.totalElements ?? 0} label="톡댓톡" />
        <ToggleGroup
          items={toggleItem}
          selectedValue={selectedValue}
          onClick={setToggleValue}
        />
      </div>
      <div css={S.loggedInBackground}>
        {!isMyTalkPick && !voted && (
          <div css={S.loggedOutBackground}>
            <div css={S.toastModalWrapper}>
              <ToastModal bgColor="black">
                투표 후에 확인할 수 있습니다.
              </ToastModal>
            </div>
          </div>
        )}
        <TextArea
          size="large"
          value={commentValue}
          onSubmit={handleCommentButton}
          placeholder="댓글을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCommentValue(e.target.value)
          }
          label="등록"
        />
        <div css={S.commentsWrapper}>
          {commentList?.content.map((commentData) => (
            <CommentItem
              key={commentData.id}
              comment={commentData}
              talkPickWriter={talkPickWriter}
            />
          ))}
        </div>
      </div>
      <div css={S.paginationWrapper}>
        <Pagination
          pages={pages}
          selected={selectedPage}
          maxPage={commentList?.totalPages ?? 0}
          onChangeNavigate={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CommentsSection;
