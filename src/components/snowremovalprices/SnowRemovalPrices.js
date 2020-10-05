import React, { Component } from 'react'

export class SnowRemovalPrices extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='package-div'>
          <div>
            <span className='package-name'> {this.props.package} </span><br/>
            <p> {this.props.driveway} </p>
          </div>
          <span className='package-price'> {this.props.price} </span>
        </div>
      </React.Fragment>
    )
  }
}

export default SnowRemovalPrices
