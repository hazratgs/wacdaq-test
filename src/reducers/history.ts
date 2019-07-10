import { createReducer } from 'redux-act'
import * as actions from '../actions/history'
import { IHistoryState, IHistoryItem } from '../types/history'

const initialState: IHistoryState = {
  items: []
}

const reducer = createReducer<typeof initialState>({}, initialState)

reducer.on(actions.getHistorySuccess, (state, payload: IHistoryItem[]) => ({
  ...state,
  items: payload
}))

export default reducer
