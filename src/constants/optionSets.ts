export enum OptionKeys {
  TALK_PICK = 'talkPick',
  BALANCE_GAME = 'balanceGame',
}

export const optionSets: Record<OptionKeys, string[]> = {
  [OptionKeys.TALK_PICK]: [
    '내가 저장한',
    '내가 투표한',
    '내가 댓글단',
    '내가 작성한',
  ],
  [OptionKeys.BALANCE_GAME]: ['내가 저장한', '내가 투표한', '내가 만든'],
};
