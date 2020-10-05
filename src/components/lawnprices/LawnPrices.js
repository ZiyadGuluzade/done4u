import React, { Component } from 'react'

export class LawnPrices extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='package-div'>
          <div>
            <span className='package-name'> {this.props.servicetype} </span><br/>
            <p> {this.props.area} </p>             
          </div>
          <span className='package-price'> {this.props.price} </span>
        </div>
      </React.Fragment>
    )
  }
}

export default LawnPrices
