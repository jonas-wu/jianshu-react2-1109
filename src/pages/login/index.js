import React, {PureComponent} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    return (
      <div>Login</div>
    )
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['header', 'loginStatus']),
})

const mapDispatch = (dispatch) => ({
  login(account, password) {
  },
})

export default connect(mapState, mapDispatch)(Login)