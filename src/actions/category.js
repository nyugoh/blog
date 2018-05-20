import * as types from '../consts';
import axios from 'axios';

const base = '/api/v1/blog/categories';

export const add = skill => dispatch => axios.post(`${base}/add`, {skill}).then( response => {
	dispatch({
		type: types.CATEGORY_ADDED,
		payload: response.data.category
	});
});

export const fetch = skill => dispatch => axios.get(`${base}/list`).then( response => {
	dispatch({
		type: types.CATEGORY_FETCHED,
		payload: response.data.categories
	});
});
