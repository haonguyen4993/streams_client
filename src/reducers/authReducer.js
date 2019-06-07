import { SIGN_IN, SIGN_OUT } from '../actions/types';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null,
};

// export default (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case SIGN_IN:
// 			return { ...state, isSignedIn: true, userId: action.payload };
// 		case SIGN_OUT:
// 			return { ...state, isSignedIn: false, userId: null };
// 		default:
// 			return state;
// 	}
// };

export default handleActions(
	{
		[SIGN_IN]: (state, action) => ({ ...state, isSignedIn: true, userId: action.payload }),
		[SIGN_OUT]: (state, action) => ({ ...state, isSignedIn: false, userId: null }),
	},
	INITIAL_STATE
);