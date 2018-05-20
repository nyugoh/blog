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

export const edit = skill => dispatch => axios.put(`${base}/edit`, {skill}).then( response => {
	dispatch({
		type: types.CATEGORY_EDITED,
		payload: response.data.category
	});
});

export const remove = id => dispatch => axios.delete(`${base}/delete/${id}`).then( response => {
	dispatch({
		type: types.CATEGORY_DELETED,
		payload: response.data.id
	});
});
