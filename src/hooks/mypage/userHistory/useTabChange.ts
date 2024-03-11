import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface TabProps {
  id: number;
  url: string;
  icon?: React.ReactNode;
  text?: string;
}

export const useTabChange = (tabs: TabProps[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialId = useMemo(() => {
    const id = tabs.findIndex((tab) => location.pathname.includes(tab.url));
    return id === -1 ? 0 : id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [selectedId, setSelectedId] = useState<number>(initialId);
  const onTabChange = (id: number) => {
    setSelectedId(id);
    navigate(tabs[id].url);
  };
  return { selectedId, onTabChange };
};
