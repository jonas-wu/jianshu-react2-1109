import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {

  render() {
    const element = this.props.loginStatus ? 
      (
        <div>
          写文章页面
        </div>
      ) : 
      (
        <Redirect to='/login'/>
      )
    return (
      element
    )
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login']),
  }
}

export default connect(mapState, null)(Write)