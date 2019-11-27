import { put, takeLatest } from 'redux-saga/effects';

export function* getUserWorker() {
    const users = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());

    yield put ({type: 'USERS_RECEIVED', value: users})
}
export default function* getUserWatcher() {
    yield takeLatest('GET_USERS', getUserWorker)
}