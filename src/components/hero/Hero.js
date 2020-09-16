import React, { Component } from 'react'
import './hero.css';

export class Hero extends Component {
  render() {
    return (
      <React.Fragment>
          <div className='hero'>
            <div className='hero-div'>
              <div className='hero-text-div'>
                <h2 className='hero-text'>
                  Welcome to Done<span className='brand-name-4'>4</span>U <br/>The only app you need
                </h2>
                <p className='hero-paragraph'>Waterless Car Wash, Snow Removal, <br/>Lawn Care & Cleaning Services</p>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/app_store.png')} />
                </a>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/google_play.png')} />
                </a>
              </div>
              <div className='hero-img-div'>
                <img className='hero-img' src={require('../../images/done.svg')} />
              </div>
            </div> 
          </div>
      </React.Fragment>
    )
  }
}

export default Hero
