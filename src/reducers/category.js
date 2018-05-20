import * as types from '../consts';

const categories = (state = [], action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case types.CATEGORY_ADDED:
			return [
				...state,
				payload
			];
		case types.CATEGORY_FETCHED:
			return [ ...payload ];
		default:
			return state;
	}
};

export default categories;
