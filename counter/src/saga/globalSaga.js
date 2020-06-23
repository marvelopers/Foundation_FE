import { all, fork, call, put, takeEvery, delay } from "redux-saga/effects";

function* increseRequestAction() {
  console.log('==>1')
  yield takeEvery("INCREMENT_REQUEST", countRequestActionSaga);
}

function* decreseRequestAction() {
  console.log('==>2')
  yield takeEvery("DECREMENT_REQUEST", countRequestActionSaga)
}

function* countRequestActionSaga(action) {
  yield delay(1000);
  console.log("1초 지났습니다.");
  yield put({ type: "INCREMENT", payload: action.payload + 1 });
  console.log("숫자를 증가시켰습니다.");
  yield put({ type: "DECREMENT", payload: action.payload - 1 });
  console.log("숫자를 감소시켰습니다.");

}


export function* globalSaga() {
  yield all()
}
