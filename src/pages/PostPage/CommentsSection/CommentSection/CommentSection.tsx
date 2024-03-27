import React, { SetStateAction, useState } from 'react';
import UserComment from '@/components/common/UserComment/UserComment';
import { Comment } from '@/types/comment';
import RepliesSection from './RepliesSection/RepliesSection';

interface CommentSectionProps {
  comment: Comment;
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
  balanceOptionIds: number[];
  postId: number;
  selectedOptionId: number | null;
  selectedPageNumber: number;
}

const CommentSection = ({
  comment,
  handleLoginModal,
  balanceOptionIds,
  selectedOptionId,
  postId,
  selectedPageNumber,
}: CommentSectionProps) => {
  const [isOpenReplies, setIsOpenReplies] = useState<boolean>(false);

  return (
    <>
      <UserComment
        {...comment}
        handleLoginModal={handleLoginModal}
        balanceOptionIds={balanceOptionIds}
        isOpenReplies={isOpenReplies}
        handleOpenReplies={setIsOpenReplies}
        selectedPageNumber={selectedPageNumber}
      />
      {isOpenReplies && (
        <RepliesSection
          parentCommentId={comment.id}
          handleLoginModal={handleLoginModal}
          postId={postId}
          selectedOptionId={selectedOptionId}
          balanceOptionIds={balanceOptionIds}
          isAlignLeft={comment.selectedOptionId === balanceOptionIds[0]}
        />
      )}
    </>
  );
};

export default CommentSection;
