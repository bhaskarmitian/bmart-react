import {takeEvery,put} from 'redux-saga/effects';

function* workerSaga(){
 console.log("workerSaga");
 yield put({type:'SEND_ACTION'})
}

export function* rootSaga() {
  console.log("rootSaga");
  yield takeEvery('Hello', workerSaga);
}
