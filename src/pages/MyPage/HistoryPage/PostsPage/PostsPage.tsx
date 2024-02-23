import React, { useState } from 'react';
import PageNavigation from '../../../../components/Paginavigation/Paginavigation';

const PostsPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <PageNavigation
        pages={pages}
        selected={selectedPage}
        maxPage={pages.length}
        onChangeNavigate={(page: number) => {
          setSelectedPage(page);
        }}
      />
    </div>
  );
};

export default PostsPage;
