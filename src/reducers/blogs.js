import * as types from '../consts';

const blogs = (state = [], action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case types.BLOG_ADDED:
			return [ ...state, payload ];
		case types.BLOGS_FETCHED:
			return payload;
		default:
			return state;
	}
};

export default blogs;
