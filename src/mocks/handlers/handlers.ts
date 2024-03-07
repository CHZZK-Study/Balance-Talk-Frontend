// eslint-disable-next-line import/no-extraneous-dependencies
import postHandlers from './post';
import memberHandlers from './member';
import commentsHandlers from './comments';

const handlers = [...postHandlers, ...memberHandlers, ...commentsHandlers];

export default handlers;
