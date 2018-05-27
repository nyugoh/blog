import * as types from "../consts";

const  general = (state=[], action={}) => {
	const { type, payload }  = action;
	switch (type) {
		case types.CATEGORY_FETCH:
			console.log(payload)
			console.log(type)
			return [ ... payload ];
		default:
			return state;
	}
};

export default general;
