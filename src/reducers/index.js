import { combineReducers } from 'redux';
import blogs from './blogs';
import category from './category';

export default combineReducers({
	blogs,
	categories: category
});

