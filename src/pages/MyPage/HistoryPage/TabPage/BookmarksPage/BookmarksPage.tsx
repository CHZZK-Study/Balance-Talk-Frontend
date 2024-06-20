/* eslint-disable @typescript-eslint/no-misused-promises */
import PageNavigation from '@/components/common/Paginavigation/Paginavigation';
import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/design/CheckBox/CheckBox';
import List from '@/components/mypage/List/List';
import ItemMyBookmarksPosts from '@/components/mypage/ListItem/ItemMyBookmarksPosts';
import ItemNull from '@/components/mypage/ListItem/ItemNull';
import { NULL } from '@/constants/message';
import { useBookmarkDeleteAllMutation } from '@/hooks/api/useBookmarkDeleteAllMutation';
import { useMyBookmarksPostsQuery } from '@/hooks/api/useMyBookmarksPostsQuery';
import { useCheckboxSelect } from '@/hooks/mypage/userHistory/useCheckboxSelect';
import { MyBookmarksPostsContentType } from '@/types/mypage';
import { createRangeArray } from '@/utils/array';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { bookmarksBtnContainer } from './BookmarksPage.style';
import { v4 as uuidv4 } from 'uuid';

const BookmarksPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const { myBookmarksPosts, isLoading } = useMyBookmarksPostsQuery(
    selectedPage - 1,
  );
  const pages = createRangeArray(myBookmarksPosts?.totalPages || 0);
  const { isAllChecked, checkItems, handleSingleChecked, handleAllChecked } =
    useCheckboxSelect(myBookmarksPosts?.content);

  const queryClient = useQueryClient();
  const deleteBookmark = useBookmarkDeleteAllMutation(
    checkItems,
    selectedPage - 1,
  );

  const handleClearSubmit = () => {
    checkItems.forEach((postId) => {
      deleteBookmark.mutate(Number(postId));
    });
  };

  const handleChangeNavigate = async (page: number) => {
    setSelectedPage(page);
    await queryClient.invalidateQueries({
      queryKey: ['myBookmarksPosts', page],
    });
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div css={bookmarksBtnContainer}>
        <CheckBox
          label="전체 선택"
          isChecked={isAllChecked}
          handleChecked={handleAllChecked}
        />
        <Button size="xSmall" onClick={handleClearSubmit}>
          북마크 해제
        </Button>
      </div>

      <List>
        {myBookmarksPosts && myBookmarksPosts.totalPages > 0 ? (
          myBookmarksPosts.content.map((item: MyBookmarksPostsContentType) => {
            return (
              <ItemMyBookmarksPosts
                id={item.postId.toString()}
                key={uuidv4()}
                item={item}
                isChecked={checkItems.includes(item.postId.toString())}
                handleChecked={handleSingleChecked}
              />
            );
          })
        ) : (
          <ItemNull>{NULL.BOOKMARKS}</ItemNull>
        )}
      </List>
      {myBookmarksPosts && myBookmarksPosts.totalPages > 0 && (
        <PageNavigation
          pages={pages}
          selected={selectedPage}
          maxPage={pages.length}
          onChangeNavigate={handleChangeNavigate}
        />
      )}
    </>
  );
};

export default BookmarksPage;
