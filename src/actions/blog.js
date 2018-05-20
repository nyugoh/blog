import axios from 'axios';
import * as types from '../consts';

const base = '/api/v1/blog';

export const add = blog => dispatch => axios.post(`${base}/add`, {blog}).then( response =>{
	dispatch({
		type: types.BLOG_ADDED,
		payload: response.data.blog
	});
});
