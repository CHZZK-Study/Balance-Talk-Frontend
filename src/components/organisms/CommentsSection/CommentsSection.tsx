import React, { useState, useEffect } from 'react';
import Comment from '@/components/molecules/Comment/Comment';
import Pagination from '@/components/atoms/Pagination/Pagination';
import TextArea from '@/components/molecules/TextArea/TextArea';
import Toggle from '@/components/atoms/Toggle/Toggle';
import { calculateTotalPages, generatePageNumbers } from '@/utils/pagination';
import * as S from './CommentsSection.style';

interface CommentData {
  id: string;
  imgUrl: string;
  nickname: string;
  createdTime: string;
  comment: string;
  likeCount: number;
  stance: 'pros' | 'cons';
}

interface CommentsSectionProps {
  commentsData: CommentData[];
}

const CommentsSection = ({ commentsData }: CommentsSectionProps) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [displayedComments, setDisplayedComments] = useState<CommentData[]>([]);
  const [replyText, setReplyText] = useState('');

  const commentsPerPage = 7;

  useEffect(() => {
    const startIndex = (selectedPage - 1) * commentsPerPage;
    const newDisplayedComments = commentsData.slice(
      startIndex,
      startIndex + commentsPerPage,
    );
    setDisplayedComments(newDisplayedComments);
  }, [selectedPage, commentsData]);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    console.log('작성한 댓글:', replyText);
    setReplyText('');
  };

  const totalPages = calculateTotalPages(commentsData.length, commentsPerPage);
  const pages = generatePageNumbers(totalPages);

  return (
    <div css={S.commentsSectionContainer}>
      <Toggle count={127} label="톡댓톡" />
      <TextArea
        size="large"
        value={replyText}
        onChange={handleReplyChange}
        onSubmit={handleReplySubmit}
        placeholder="댓글을 입력하세요"
        label="등록"
      />
      <div css={S.commentsWrapper}>
        {displayedComments.map((commentData) => (
          <Comment key={commentData.id} {...commentData} />
        ))}
      </div>
      <div css={S.paginationWrapper}>
        <Pagination
          pages={pages}
          selected={selectedPage}
          maxPage={totalPages}
          onChangeNavigate={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CommentsSection;
