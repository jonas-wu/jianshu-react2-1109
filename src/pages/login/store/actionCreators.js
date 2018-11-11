import {constants} from './index'
import axios from 'axios'

export const setLogin = (login) => ({
  type: constants.SET_LOGIN,
  login
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        console.log('login', res.data)
        if (res.data.result) {
          dispatch(setLogin(true))
        } else {
          alert('login failed')
        }        
      })
      .catch((err) => {
        console.log('login', err)
        alert(err)
      })
  }
}