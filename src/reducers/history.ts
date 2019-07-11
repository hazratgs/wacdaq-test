import { createReducer } from 'redux-act'
import * as actions from '../actions/history'
import { IHistoryState, HistoryItem, VolumeItem } from '../types/history'

const initialState: IHistoryState = {
  symbol: 'ETH/BTC',
  from: 1551398400,
  items: [],
  volume: [],
  error: false,
  loader: false
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getHistory, (state, payload: boolean) => ({
  ...state,
  loader: payload,
  error: false
}))

reducer.on(actions.getHistorySuccess, (state, payload: HistoryItem[]) => ({
  ...state,
  items: payload,
  loader: false,
  error: false
}))

reducer.on(actions.getHistoryError, (state) => ({
  ...state,
  loader: false,
  error: true
}))

reducer.on(actions.getHistoryError, (state) => ({
  ...state,
  loader: false,
  error: true
}))

reducer.on(actions.getVolumeSuccess, (state, payload: VolumeItem[]) => ({
  ...state,
  volume: payload
}))

export default reducer
