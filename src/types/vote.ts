// 선택지 투표 및 변경 시, post로 보낼 data 타입
export type SelectedVoteInfo = {
  selectedOptionId: number;
  isUser: boolean;
};
