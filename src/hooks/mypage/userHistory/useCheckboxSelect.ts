import { MyBookmarksPostsContentType } from '@/types/mypage';
import { ChangeEvent, useState } from 'react';

export const useCheckboxSelect = (
  data: MyBookmarksPostsContentType[] | undefined,
) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSingleChecked, setIsSingleChecked] = useState(false);
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const handleSingleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setCheckItems([...checkItems, e.currentTarget.id]);
      if (checkItems.length === (data?.length || 0) - 1) {
        setIsAllChecked(true);
      }
    } else {
      setCheckItems(checkItems.filter((item) => item !== e.currentTarget.id));
      setIsAllChecked(false);
    }
    setIsSingleChecked(!isSingleChecked);
  };

  const handleAllChecked = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setCheckItems(data?.map((item) => item.id?.toString() || '') || []);
    } else {
      setCheckItems([]);
    }
    setIsAllChecked(!isAllChecked);
  };

  return {
    isAllChecked,
    checkItems,
    handleAllChecked,
    handleSingleChecked,
  };
};
