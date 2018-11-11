import React, {PureComponent} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    console.log('Login', this.props.loginStatus)
    if (this.props.loginStatus) {
      return <Redirect to='/'/>
    } 
    return (
      <div className='login-wrapper'>
        <div className='login-box'>
          <input placeholder='账号' className='login-account' 
            ref={(input) => this.accountInput = input}/>
          <input placeholder='密码' type='password' className='login-password'
            ref={(input) => this.passwordInput = input}/>
          <div className='login-button' 
            onClick={() => this.props.login(this.accountInput, this.passwordInput)}>登录</div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
})

const mapDispatch = (dispatch) => ({
  login(accountInput, passwordInput) {
    console.log('login', accountInput.value, passwordInput.value)
    if (accountInput.value && passwordInput.value) {
      dispatch(actionCreators.login(accountInput.value, passwordInput.value))
    } else {
      alert('Please input accout or password!')
    }
  },
})

export default connect(mapState, mapDispatch)(Login)