import React, { Component } from 'react'

export class CarWashPrices extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='package-div'>
                <div>
                <span className='package-name'> {this.props.servicename} </span><br/>
                  <p> {this.props.serviceincludes} </p>
                </div>
                <span className='package-price'> {this.props.price} </span>
              </div>
      </React.Fragment>
    )
  }
}

export default CarWashPrices
