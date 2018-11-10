import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  login: false,
})

export default (state = defaultState, action) => {
  console.log('reducer', action)
  switch(action.type) {
    case constants.SET_LOGIN:
      return state.set('login', action.login)
    default:
      return state;
  }
}