import * as types from '../consts';

const blogs = (state = [], action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case types.BLOG_ADDED:
			return [ ...state, payload ];
		case types.BLOG_FETCHED:
			return [ ...payload ];
		case types.BLOG_EDITED:
			return state.map( item => item._id === payload._id?payload:item);
		case types.BLOG_DELETED:
			return state.filter( item => item._id !== payload);
		case types.MESSAGE_SENT:
			return state;
		default:
			return state;
	}
};

export default blogs;
