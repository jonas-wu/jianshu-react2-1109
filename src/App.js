import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import './statics/iconfont/iconfont.css'
import store from './store'
import Header from './common/header'
import Login from './pages/login'
import Home from './pages/home'
import Write from './pages/write'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <div>
              <Header/>
                <Route exact path='/' component={Home}/>
              <Route path='/detail' component={() => <div>detail</div>}/>
              <Route path='/login' component={Login}/>
              <Route path='/write' component={Write}/>
              <Route path='/register' component={() => <div>register</div>}/>
            </div>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
