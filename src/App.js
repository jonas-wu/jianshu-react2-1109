import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import './statics/iconfont/iconfont.css'
import store from './store'
import Header from './common/header'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <div>
              <Header/>
                <Route exact path='/' component={() => <div>home</div>}/>
              <Route path='/detail' component={() => <div>detail</div>}/>
              <Route path='/login' component={() => <div>login</div>}/>
              <Route path='/write' component={() => <div>write</div>}/>
            </div>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
