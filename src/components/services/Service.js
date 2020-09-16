import React, { Component } from 'react'
import './service.css';

export class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='services'>
          {/* <div className='section-gradient-div'></div> */}
          <div className='services-main-div'>
            <div className='section-title-div'>
              <div className='section-title-inner-div'>
                <h2 className='service-section-title'>Our Services</h2> 
                <hr className='section-title-underline' />
              </div>
            </div>
        
            <div className='services-div'>
              <div className='services-row'>
                <div className='service-div' id='snow-removal'>
                  <h3 className='service-name'>Snow Removal</h3>
                  <img className='service-img'src={require('../../images/snow_removal_service.jpg')}/>
                  <a className='service-info-link' href='/snow-removal'>Learn more</a>
                </div>

                <div className='service-div' id='grass-cutting'>
                  <h3 className='service-name'>Lawn Care</h3>
                  <img  className='service-img'src={require('../../images/grass_cutting_service.jpg')}/>
                  <a className='service-info-link' href='/lawn-services'>Learn more </a>
                </div>
              </div>
             
              <div className='services-row'>
                <div className='service-div' id='car-wash'>
                  <h3 className='service-name'>Car Wash</h3>
                  <img  className='service-img'src={require('../../images/waterless_car_wash_service.jpg')}/>
                  <a className='service-info-link' href='/carwash'>Learn more</a>
                </div>
                <div className='service-div' id='cleaning'>
                  <h3 className='service-name'>House Cleaning</h3>
                  <img  className='service-img'src={require('../../images/house_cleaning.jpg')}/>
                  <a className='service-info-link' href='/cleaning'>Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Service
