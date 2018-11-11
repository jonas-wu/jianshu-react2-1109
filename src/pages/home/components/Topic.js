import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Redirect } from 'react-router-dom'

class Topic extends PureComponent {
  render() {
    const list = this.props.list.map((item) => {
      return (
        <div className='topic-item' key={item.get('id')}>
        <img className='topic-pic'
          alt=''
          src={item.get('imgUrl')}/>
          {item.get('title')}
        </div>
      )     
    })
    return (
      <div className='topic-wrapper'>
        {list}
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList']),
})

export default connect(mapState, null)(Topic)