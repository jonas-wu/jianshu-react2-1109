import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  searchInputFocus: false,
  enterSearchList: false,
  searchList: [],
  searchListPage: 0,
})

export default (state = defaultState, action) => {
  // console.log('reducer', action)
  switch(action.type) {
    case constants.SEARCH_INPUT_FOCUS:
      return state.set('searchInputFocus', action.focus)
    case constants.ENTER_SEARCH_LIST:
      return state.set('enterSearchList', action.show)
    case constants.CHANGE_SEARCH_LIST:
      return state.set('searchList', action.data)
    case constants.CHANGE_SEARCH_LIST_PAGE:
      return state.set('searchListPage', 
        action.page % Math.ceil(state.get('searchList').size / 10))
    default:
      return state;
  }
}