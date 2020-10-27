import { call, takeEvery, put } from 'redux-saga/effects'
import { getUserAction, hideLoader, showLoader } from './actions'
import { GET_USERS_SAGA } from './types'

export function* sagaWatcher() {
   yield takeEvery(GET_USERS_SAGA, sagaWorker)
}

function* sagaWorker() {
    yield put(showLoader())
    const payload = yield call(fetchUsers)
    //yield call(timeout)
    yield put(getUserAction(payload))
    yield put(hideLoader())
}

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    return await response.json()
}

async function timeout() {
    return await setTimeout(() => {
    console.log('timeout')
    }, 5000);
}