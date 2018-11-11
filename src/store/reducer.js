import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as loginReducer} from '../pages/login/store'
import {reducer as homeReducer} from '../pages/home/store'

const reducer = combineReducers({
  header: headerReducer,
  login: loginReducer,
  home: homeReducer,
})

export default reducer