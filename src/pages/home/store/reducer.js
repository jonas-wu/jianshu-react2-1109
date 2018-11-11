import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  toggleBackTop: false,
  topicList: [],
  recommendList: [],
  newsList: [],
  newsListPage: -1,
})

export default (state = defaultState, action) => {
  // console.log('reducer', action)
  switch(action.type) {
    case constants.TOGGLE_BACKTOP:
      return state.set('toggleBackTop', action.show)
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': action.topicList,
        'recommendList': action.recommendList,
        'newsList': action.newsList,
      })
    case constants.ADD_NEWS_LIST:
      return state.merge({
        'newsListPage': action.page,
        'newsList': state.get('newsList').concat(action.list),
      })
    default:
      return state;
  }
}