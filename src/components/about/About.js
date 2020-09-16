import React, { Component } from 'react'
import './about.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <section id='about-page'>
          <div className='about-div-1'>
            <div className='about-img-div'>
              <img className='about-img' src={require('../../images/about_us_main_img.jpg')} />
            </div>
            
            <div className='about-title-div-1'>
              <h2 className='about-title'>
                About Us
              </h2>
              <h3 className='about-us-subtitle'>Our Story</h3>
              <hr className='about-subtitle-underline' />
              <p className='about-text'>
                We started <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> to disrupt the overpriced models of business industry. Our goal is to create and maintain a safe platform both for businesses and customers with fair prices, high-quality service & transparency. We are inspired by innovators & dreamers, and determined to reach excellence in every aspect of what we do.
              </p>
            </div>
          </div>

          <div className='about-div-2'>
            <div className='about-title-div-2'>
              <h3 className='about-us-subtitle'>Our Mission</h3>
              <hr className='about-subtitle-underline' />
              <p className='about-text'>
                We were founded on the belief that high quality service shouldn't be expensive. Our mission is to change this stereotype by delivering best selection of services at fair prices. Above all else, we serve with the dream of enlieving our ultimate goal: to make high-quality service affordable for everyone.
              </p>
            </div>

            <div className='about-img-div-2'>
              <img className='about-img-2' src={require('../../images/snowwww.jpg')} />
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default About;
