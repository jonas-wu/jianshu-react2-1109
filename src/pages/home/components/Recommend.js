import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class Recommend extends PureComponent {

  render() {
    return (
        <div className='recommend-wrapper'>
          {
            this.props.list.map((item) => {
              const url = item.get('imgUrl')
              return (
                // console.log(item.get('imgUrl'))
                <img key={item.get('id')}
                  className='recommend-item'
                  src={item.get('imgUrl')}
                  alt=''/>
              )
            })
          }
        </div>
    )
  }
}

const mapState = (state) => {
  return ({
    list: state.getIn(['home', 'recommendList'])
  })  
}

export default connect(mapState, null)(Recommend)