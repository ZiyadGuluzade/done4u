import React, { Component } from 'react'
import './cleaningprices.css';

export class CleaningPrices extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='package-div'>
          <div>
            <span className='package-name'>{this.props.housetype}</span><br/>
            <p>Standart house cleaning</p>
          </div>
          <span className='package-price'> {this.props.price} </span>
        </div>
      </React.Fragment>
    )
  }
}

export default CleaningPrices
