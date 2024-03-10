import { MyBookmarksPostsType } from '@/types/history';
import { ChangeEvent, useState } from 'react';

export const useCheckboxSelect = (data: MyBookmarksPostsType[] | undefined) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSingleChecked, setIsSingleChecked] = useState(false);
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const handleSingleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    if (target.checked) {
      setCheckItems([...checkItems, target.id]);
      if (checkItems.length === (data?.length || 0) - 1) {
        setIsAllChecked(true);
      }
    } else {
      setCheckItems(checkItems.filter((item) => item !== target.id));
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
