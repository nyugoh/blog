import { combineReducers } from 'redux';
import blogs from './blogs';
import category from './category';
import general from './general';

export default combineReducers({
	blogs,
	categories: category,
	general: general
});
