import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import './style.css'
import Topic from './components/Topic'
import News from './components/News'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeData()
    window.addEventListener('scroll', this.props.toggleBackTop)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.toggleBackTop)
  }

  render() {
    return (
      <div className='home-wrapper'>
        <div className='home-left'>
          <img src='https://upload.jianshu.io/admin_banners/web_images/4548/261804ae4ab744a7148bc40ef9da8e13850e6fdf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
            className='banner-img'
            alt=''/>
          <Topic/>
          <News/>
        </div>
        <div className='home-right'>
          <Recommend/>
          <Writer/>
        </div>
        {
          this.props.showBackTop ? 
            <div className='home-backtop' onClick={this.scrollTop}>回到顶部</div> : null
        }
      </div>
    )
  }

  scrollTop() {
    window.scrollTo(0, 0)
  }
}

const mapState = (state) => ({
  showBackTop: state.getIn(['home', 'toggleBackTop'])
})

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData())
  },
  toggleBackTop() {
    // console.log('scrollTop', document.documentElement.scrollTop)
    dispatch(actionCreators.toggleBackTop(document.documentElement.scrollTop > 400))
  }
})

export default connect(mapState, mapDispatch)(Home)