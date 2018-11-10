import axios from 'axios'
import {constants} from './index'
import { fromJS } from 'immutable';

export const searchInputFocus = (focus) => ({
  type: constants.SEARCH_INPUT_FOCUS,
  focus
})

export const enterSearchList = (show) => ({
  type: constants.ENTER_SEARCH_LIST,
  show
})

export const changeSearchList = (data) => ({
  type: constants.CHANGE_SEARCH_LIST,
  data: fromJS(data)
})

export const changeSearchListPage = (page) => ({
  type: constants.CHANGE_SEARCH_LIST_PAGE,
  page
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json')
      .then((res) => {
        // console.log('getSearchList', res.data)
        dispatch(changeSearchList(res.data.data))
      })
      .catch((err) => {
        console.log('getSearchList', err)
      })
  }
}