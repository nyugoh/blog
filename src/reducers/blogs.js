import * as types from '../consts';

const blogs = (state = [], action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case types.BLOG_ADDED:
			return state;
		default:
			return state;
	}
};

export default blogs;
