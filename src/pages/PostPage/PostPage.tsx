import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoginModal from '@/components/common/Modal/LoginModal/LoginModal';
import { BalanceOption } from '@/types/post';
import BalanceOptionCardsSection from './BalanceOptionCardsSection/BalanceOptionCardsSection';
import CommentsSection from './CommentsSection/CommentsSection';
import { getPost } from '../../api/posts/posts';
import CreatorSection from './CreatorSection/CreatorSection';
import UserUtilitySection from './UserUtilitySection/UserUtilitySection';
import TitleSection from './TitleSection/TitleSection';
import {
  ButtonSectionWrapper,
  ButtonStyleWrapper,
  PostPageWrapper,
  UserSectionWrapper,
} from './PostPage.style';

const PostPage = () => {
  const postId = Number(useParams().id);
  const [isOpened, setIsOpened] = useState(false);
  const { data: post } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId),
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return !post ? (
    <div />
  ) : (
    <div css={PostPageWrapper}>
      <TitleSection
        title={post?.title || 'title'}
        views={post?.views || 0}
        likesCount={post?.likesCount || 0}
        postTags={post?.postTags || []}
        totalVotesCount={post?.totalVotesCount || 0}
        category={post?.category || 'CASUAL'}
      />
      <BalanceOptionCardsSection
        id={post?.id || 0}
        balanceOptions={post?.balanceOptions || []}
        selectedOptionId={post?.selectedOptionId}
        category={post?.category || 'CASUAL'}
        deadline={post?.deadline || ''}
      />

      <div css={UserSectionWrapper}>
        {post && (
          <CreatorSection
            createdBy={post?.createdBy}
            createdAt={post?.createdAt}
            creatorProfileImageUrl={post?.profileImageUrl}
            creatorId={post?.writerId}
          />
        )}
        <UserUtilitySection
          postId={postId}
          likesCount={post?.likesCount || 0}
          myBookmark={post?.myBookmark || false}
          myLike={post?.myLike || false}
          handleLoginModal={setIsLoginModalOpen}
        />
      </div>

      <div css={ButtonSectionWrapper}>
        <button
          css={ButtonStyleWrapper}
          type="button"
          onClick={() => setIsOpened(!isOpened)}
        >
          {`댓글 ${isOpened ? '접기' : '확인하기'}`}
        </button>
      </div>
      {isOpened && (
        <CommentsSection
          postId={postId}
          selectedOptionId={post?.selectedOptionId}
          handleLoginModal={setIsLoginModalOpen}
          balanceOptionIds={post?.balanceOptions.map(
            (balanceOption: BalanceOption) => balanceOption.balanceOptionId,
          )}
        />
      )}
      {isLoginModalOpen && (
        <LoginModal handleModal={setIsLoginModalOpen} postId={postId} />
      )}
    </div>
  );
};

export default PostPage;
