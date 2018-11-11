import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import './style.css'
import { actionCreators } from './store'
import { actionCreators as loginCreators } from '../../pages/login/store'

class Header extends PureComponent {

  getSearchListArea() {
    const list = []
    const {page, searchList} = this.props
    const newSearchList = searchList.toJS()
    for (let i = page * 10; i < (page + 1) * 10 && i < newSearchList.length; i++) {
      list.push(
        <a className='search-list-item' key={i}>{newSearchList[i]}</a>
      )
    }
    // console.log('getSearchListArea', page, newSearchList.length, list)
    return (
      <div className='search-list-wrapper'
        onMouseEnter={() => this.props.enterSearchList(true)}
        onMouseLeave={() => this.props.enterSearchList(false)}>
        <div className='search-list-title'>热门搜索</div>
        <div className='search-list-switch'
          onClick={() => this.props.changeSearchListPage(page + 1, this.spinIcon)}
          >
          <div className='iconfont search-list-switch-icon'
            ref={(icon) => {this.spinIcon = icon}}>&#xe630;
          </div>
          换一批
        </div>
        <div className='search-list'>
          {list}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='head-wrapper'>
        <Link to='/'>
          <div className='head-logo'/>
        </Link>
        <div className='head-nav'>
          <Link to='/'>
            <div className='head-nav-item head-nav-item-left head-nav-item-active'>
              首页
            </div>
          </Link>          
          <div className='head-nav-item head-nav-item-left'>
            下载App
          </div>
          <div className='search-wrapper'>
            <CSSTransition in={this.props.inputFocus}
              timeout={200}
              classNames='input-slide'>
              <input placeholder='搜索' 
                className={!this.props.inputFocus ? 'search-item' : 'search-item search-item-focus'}
                onFocus={() => this.props.onInputFocus(true, this.props.searchList.size === 0)}
                onBlur={() => this.props.onInputFocus(false)}/>
            </CSSTransition>            
            <i 
              className={!this.props.inputFocus ? 'iconfont search-icon' : 'iconfont search-icon search-icon-focus'}>
              &#xe6cf;
            </i>
            {(this.props.inputFocus || this.props.inSearchList) ? this.getSearchListArea() : null}
          </div>            
            {
              this.props.loginStatus ? 
                <div className='head-nav-item head-nav-item-right'
                  onClick={() => this.props.setLogin(false)}>
                    退出
                </div> : 
                <Link to='/login'>
                  <div className='head-nav-item head-nav-item-right'>
                    登录
                  </div>
                </Link>              
            }
            <div className='head-nav-item head-nav-item-right'>
              Aa
            </div>
        </div>
        <div className='head-addition'>
          <Link to='/write'>
            <div className='head-nav-write'>
              <i className="iconfont">&#xe615;</i>写文章
            </div>
          </Link>
          <Link to='/register'>
            <div className='head-nav-reg'>注册</div>
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  inputFocus: state.getIn(['header', 'searchInputFocus']),
  searchList: state.getIn(['header', 'searchList']),
  inSearchList: state.getIn(['header', 'enterSearchList']),
  page: state.getIn(['header', 'searchListPage']),
  loginStatus: state.getIn(['login', 'login']),
})

const mapDispatch = (dispatch) => ({
  onInputFocus(focus, getSeachList) {
    if (focus && getSeachList) {
      dispatch(actionCreators.getSearchList())
    }
    dispatch(actionCreators.searchInputFocus(focus))
  },
  enterSearchList(show) {
    dispatch(actionCreators.enterSearchList(show))
  },
  changeSearchListPage(page, spinIcon) {
    let angle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
    if (!angle) {
      angle = 360
    } else {
      angle = parseInt(angle) + 360
    }
    spinIcon.style.transform = `rotate(${angle}deg)`
    console.log('changeSearchListPage', spinIcon, spinIcon.style.transform)
    dispatch(actionCreators.changeSearchListPage(page))
  },
  setLogin(login) {
    dispatch(loginCreators.setLogin(login))
  },
})

export default connect(mapState, mapDispatch)(Header)