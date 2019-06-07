import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import streams from './apis/streams';
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM ,
	DELETE_STREAM,
	EDIT_STREAM
} from './actions/types';
import history from './history';

function* fetchStreams() {
	const response = yield call(streams.get, '/streams');
	yield put({
		type: FETCH_STREAMS,
		payload: response.data,
	})
}

function* fetchStream(action) {
	const response = yield call(streams.get, `/streams/${action.payload}`);
	yield put({
		type: FETCH_STREAM,
		payload: response.data,
	})
}

function* createStream(action) {
	const state = yield select();
	const { userId } = state.auth;
	const response = yield call(streams.post, '/streams', { ...action.payload, userId })
	yield put({
		type: CREATE_STREAM,
		payload: response.data
	});
	history.push('/');
}

function* editStream(action) {
	debugger
	const { id, formValues } = action.payload
	const response = yield call(streams.patch, `/streams/${id}`, formValues)
	yield put({
		type: EDIT_STREAM,
		payload: response.data
	});
	history.push('/');
}


export default function* mySaga() {
	yield all([
  	takeLatest('CALL_FETCH_STREAMS', fetchStreams),
  	takeLatest('CALL_FETCH_STREAM', fetchStream),
  	takeLatest('CALL_CREATE_STREAM', createStream),
  	takeLatest('CALL_EDIT_STREAM', editStream),
  ]);
}
