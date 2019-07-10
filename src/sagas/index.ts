import { all, fork } from 'redux-saga/effects'
import history from './history'

export default function* rootSaga() {
  return yield all([
    history
  ].map(fork))
}
