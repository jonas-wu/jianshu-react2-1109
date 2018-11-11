import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Redirect, Link } from 'react-router-dom'

class News extends PureComponent {
  render() {
    const list = this.props.list.map((item, index) => {
      return (
        <Link to={'/detail/' + item.get('id')} key={index}>
          <div className='news-item'>
            <p className='news-title'>
              {item.get('title')}
            </p>
            <div className='news-summary'>
              {item.get('summary')}
            </div>
            <img className='news-pic'
              alt=''
              src={item.get('imgUrl')}/>
          </div>
        </Link>
      )     
    })
    return (
      <div className='news-wrapper'>
        {list}
        <div onClick={() => this.props.loadMore(this.props.page + 1)}
          className='news-loadmore'>
          加载更多
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'newsList']),
  page: state.getIn(['home', 'newsListPage']),
})

const mapDispatch = (dispatch) => ({
  loadMore(page) {
    dispatch(actionCreators.loadMore(page))
  }
})

export default connect(mapState, mapDispatch)(News)