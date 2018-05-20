import axios from 'axios';
import * as types from '../consts';

const base = '/api/v1/blog';

export const add = blog => dispatch => axios.post(`${base}/add`, {blog}).then( response =>{
	dispatch({
		type: types.BLOG_ADDED,
		payload: response.data.blog
	});
});

export const fetch = () => dispatch => axios.get(`${base}/list`).then( response => {
	dispatch({
		type: types.BLOG_FETCHED,
		payload: response.data.blogs
	});
});

export const edit = blog => dispatch => axios.put(`${base}/edit`, {blog}).then( response => {
	dispatch({
		type: types.BLOG_EDITED,
		payload: response.data.blog
	});
});

export const remove = id => dispatch => axios.delete(`${base}/delete/${id}`).then( response => {
	dispatch({
		type: types.BLOG_DELETED,
		payload: response.data.id
	});
});
