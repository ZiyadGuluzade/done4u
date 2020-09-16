import React, { Component } from 'react'
import './info.css';

export class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='info'>
          <div className='info-div'>
            <h2 className='info-title'>Why Done4U</h2>
            <hr className='info-section-title-underline' />
            <div className='info-cards-div'>
              <div className='info-card'>
                <h3 className='card-subtitle'>How it works</h3>
                <ul className='info-list'>
                  <li className='info-list-item'>Download the Done4U App</li>
                  <li className='info-list-item'>Book a service of your choice</li>
                  <li className='info-list-item'>Pay online</li>
                  <li className='info-list-item'>Enjoy the best service</li>
                </ul>
              </div>
              <div className='info-card'>
                <h3 className='card-subtitle'>Benefits</h3>
                <ul className='info-list'>
                  <li className='info-list-item'>User-friendly interface</li>
                  <li className='info-list-item'>Available on your phone</li>
                  <li className='info-list-item'>Secure payments</li>
                  <li className='info-list-item'>Wide price range</li>
                  <li className='info-list-item'>Reasonable prices</li>
                  <li className='info-list-item'>High quality service</li>
                </ul>
              </div>
              <div className='info-card'>
                <h3 className='card-subtitle'>
                  Download your app here
                </h3>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/app_store.png')} />
                </a>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/google_play.png')} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Info
