import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import React, { SetStateAction } from 'react';
import { useCreateCommentForm } from '@/hooks/comment/useCreateCommentForm';
import { getReplies } from '@/api/comments/comments';
import { useQuery } from '@tanstack/react-query';
import UserComment from '@/components/common/UserComment/UserComment';
import InputNewReply from '@/components/common/InputComment/InputNewReply/InputNewReply';
import {
  repliesSectionWrapper,
  repliesListSectionWrapper,
  repliesWrapper,
} from './RepliesSection.style';

interface RepliesSectionProps {
  parentCommentId: number;
  isAlignLeft: boolean;
  selectedOptionId: number | null;
  balanceOptionIds: number[];
  postId: number;
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
}

const RepliesSection = ({
  parentCommentId,
  isAlignLeft,
  selectedOptionId,
  balanceOptionIds,
  postId,
  handleLoginModal,
}: RepliesSectionProps) => {
  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  const { data: replies, isLoading } = useQuery({
    queryKey: ['posts', 'comments', postId, parentCommentId, 'replies'],
    queryFn: () => getReplies(postId, parentCommentId),
  });

  const { form, onChange, reset } = useCreateCommentForm();

  return isLoading ? (
    <div />
  ) : (
    <div css={repliesSectionWrapper(isAlignLeft)}>
      {member && selectedOptionId && (
        <InputNewReply
          value={form.content}
          onChange={onChange}
          reset={reset}
          postId={postId}
          commentId={parentCommentId}
          memberId={member.memberId}
        />
      )}
      <div css={repliesListSectionWrapper}>
        <div css={repliesWrapper}>
          {replies?.map((reply: Comment) => (
            <UserComment
              {...reply}
              balanceOptionIds={balanceOptionIds}
              handleLoginModal={handleLoginModal}
              alignLeft={isAlignLeft}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepliesSection;
