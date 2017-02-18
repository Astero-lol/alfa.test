import {
	POST_USER_REQUEST,
	POST_USER_SUCCESS,
	POST_USER_ERROR
} from '../constants/Page'

const initialState = {
	disabled: false
};

export default function data(state = initialState, action) {

	switch (action.type) {
		case POST_USER_REQUEST:
			return {...state, disabled: true, responseMessage: action.responseMessage, status: action.status };

		case POST_USER_SUCCESS:
			return {...state, disabled: false, responseMessage: action.responseMessage, status: action.status };

		case POST_USER_ERROR:
			return {...state, disabled: false, responseMessage: 'Произошла ошибка :(', status: 'error' };

		default:
			return state;
	}

}
