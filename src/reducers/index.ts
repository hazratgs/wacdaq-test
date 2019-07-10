import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './history'
import { State } from '../types/state'

export default (browserHistory: any) => combineReducers<State>({
  router: connectRouter(browserHistory),
  history,
})
