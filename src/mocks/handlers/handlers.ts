// eslint-disable-next-line import/no-extraneous-dependencies
import postHandlers from './post';
import memberHandlers from './member';

const handlers = [...postHandlers, ...memberHandlers];

export default handlers;
