// eslint-disable-next-line import/no-extraneous-dependencies
import postHandlers from './post';
import memberHandlers from './member';
import commentsHandlers from './comments';
import historyHandlers from './history';
import voteHandlers from './vote';

const handlers = [
  ...postHandlers,
  ...memberHandlers,
  ...commentsHandlers,
  ...historyHandlers,
  ...voteHandlers,
];

export default handlers;
