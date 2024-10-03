import { Comment } from '@/types/comment';
import { useCreateLikeCommentMutation } from '@/hooks/api/like/useCreateLikeCommentMutation';
import { useDeleteLikeCommentMutation } from '@/hooks/api/like/useDeleteLikeCommentMutation';
import { useEditCommentMutation } from '@/hooks/api/comment/useEditCommentMutation';
import { useDeleteCommentMutation } from '@/hooks/api/comment/useDeleteCommentMutation';
import { useReportCommentMutation } from '@/hooks/api/report/useReportCommentMutation';

export const useCommentActions = (
  commentData: Comment,
  editText: string,
  setEditButtonClicked: (value: boolean) => void,
) => {
  const { mutate: editComment } = useEditCommentMutation(
    commentData.talkPickId,
    commentData.id,
    setEditButtonClicked,
  );

  const { mutate: deleteComment } = useDeleteCommentMutation(
    commentData.talkPickId,
    commentData.id,
  );

  const { mutate: createLikeComment } = useCreateLikeCommentMutation(
    commentData.talkPickId,
    commentData.id,
  );

  const { mutate: deleteLikeComment } = useDeleteLikeCommentMutation(
    commentData.talkPickId,
    commentData.id,
  );

  const {
    mutate: handleReport,
    reportModalText,
    reportModal,
    setReportModal,
  } = useReportCommentMutation(commentData.talkPickId, commentData.id);

  const handleEditSubmit = () => {
    if (commentData.content === editText) return;
    editComment({ content: editText });
  };

  const handleDelete = () => {
    deleteComment();
  };

  const handleLikeToggle = (myLike: boolean) => {
    if (myLike) {
      deleteLikeComment();
    } else {
      createLikeComment();
    }
  };

  return {
    handleEditSubmit,
    handleDelete,
    handleLikeToggle,
    reportModalText,
    reportModal,
    setReportModal,
    handleReport,
  };
};
