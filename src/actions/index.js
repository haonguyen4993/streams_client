import streams from '../apis/streams';
import history from '../history';
import { createActions } from 'redux-actions';
import * as ActionTypes from './types';

export const signIn = (userId) => {
	return {
		type: ActionTypes.SIGN_IN,
		payload: userId,
	};
}

export const signOut = () => {
	return {
		type: ActionTypes.SIGN_OUT,
	};
}

// export const callFetchStreams = () => {
// 	return {
// 		type: 'CALL_FETCH_STREAMS',
// 	};
// }

// export const callFetchStream = (id) => {
// 	return {
// 		type: 'CALL_FETCH_STREAM',
// 		payload: id,
// 	}
// }

// export const callCreateStream = (formValues) => {
// 	return {
// 		type: 'CALL_CREATE_STREAM',
// 		payload: formValues,
// 	}
// }

// export const callEditStream = (id, formValues) => {
// 	return {
// 		type: 'CALL_EDIT_STREAM',
// 		payload: {
// 			id,
// 			formValues,
// 		},
// 	}
// }

export const {
	callFetchStreams,
	callFetchStream,
	callCreateStream,
	callEditStream
} = createActions({
	[ActionTypes.CALL_FETCH_STREAMS]: undefined,
	[ActionTypes.CALL_FETCH_STREAM]: undefined,
	[ActionTypes.CALL_CREATE_STREAM]: undefined,
	[ActionTypes.CALL_EDIT_STREAM]: (id, formValues) => ({ id, formValues }),
});

export const createStream = (formValues) => async (dispatch, getState) => {
	// const { userId } = getState().auth;
	// const response = await streams.post('/streams', { ...formValues, userId });
	// dispatch({
	// 	type: CREATE_STREAM,
	// 	payload: response.data,
	// });
	// history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
	// const response = await streams.get('/streams');
	// dispatch({
	// 	type: FETCH_STREAMS,
	// 	payload: response.data,
	// });
};

export const fetchStream = (id) => async (dispatch) => {
	// const response = await streams.get(`/streams/${id}`);
	// dispatch({
	// 	type: FETCH_STREAM,
	// 	payload: response.data,
	// });
};

export const editStream = (id, formValues) => async (dispatch) => {
	// const response = await streams.patch(`/streams/${id}`, formValues);
	// dispatch({
	// 	type: EDIT_STREAM,
	// 	payload: response.data,
	// });
	// history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
	// await streams.delete(`/streams/${id}`);
	// dispatch({
	// 	type: DELETE_STREAM,
	// 	payload: id,
	// });
	// history.push('/');
};