import axios from 'axios';

import {
	POST_USER_REQUEST,
	POST_USER_SUCCESS,
	POST_USER_ERROR
} from '../constants/Page';

export function createUser(firstName, lastName) {

	return (dispatch) => {
		dispatch({type: POST_USER_REQUEST});
		axios.post('http://localhost:3000/data', {
			firstName,
			lastName
		})
		.then((response) => {
			console.log(response);
			dispatch({
				type: POST_USER_SUCCESS,
				responseMessage: response.data.responseMessage,
				status: response.data.status
			})
		})
		.catch((err) => {
			dispatch({
				type: POST_USER_ERROR,
				responseMessage: 'Произошла ошибка :(',
				payload: err
			})
		})
	}
}
