// eslint-disable-next-line import/no-extraneous-dependencies
import postHandlers from './post';
import memberHandlers from './member';
import commentsHandlers from './comments';
import historyHandlers from './history';

const handlers = [
  ...postHandlers,
  ...memberHandlers,
  ...commentsHandlers,
  ...historyHandlers,
];

export default handlers;
