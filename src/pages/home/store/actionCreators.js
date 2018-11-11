import axios from 'axios'
import {constants} from './index'
import { fromJS } from 'immutable';

export const toggleBackTop = (show) => ({
  type: constants.TOGGLE_BACKTOP,
  show
})

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  recommendList: fromJS(data.recommendList),
  newsList: fromJS(data.newsList),
})

const addNewsList = (page, list) => ({
  type: constants.ADD_NEWS_LIST,
  list: fromJS(list),
  page
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json')
      .then((res) => {
        console.log('getHomeData', res.data)
        dispatch(changeHomeData(res.data))
      })
      .catch((err) => {
        console.log('getHomeData', err)
      })
  }
}

export const loadMore = (page) => {
  return (dispatch) => {
    axios.get('/api/newsList.json?page=' + page)
      .then((res) => {
        console.log('loadMore', res.data)
        dispatch(addNewsList(page, res.data.data))
      })
      .catch((err) => {
        console.log('getHomeData', err)
      })
  }
}