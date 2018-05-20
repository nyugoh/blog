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
		case types.CATEGORY_EDITED:
			return state.map( item => item._id === payload._id?payload:item);
		case types.CATEGORY_DELETED:
			return state.filter( item => item._id !== payload);
		default:
			return state;
	}
};

export default categories;
