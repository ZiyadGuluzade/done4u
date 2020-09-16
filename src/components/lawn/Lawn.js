import React, { Component } from 'react'
import './lawn.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export class Lawn extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <section id='lawn-services'>
            <div clasName='lawn-div'>
              <div className='lawn-header'>
                <div className='lawn-img-div'>
                  <img className='lawn-img' src={require('../../images/lawn_cutting.jpg')} />
                </div>
                <div className='lawn-text-div'>
                  <h3 className='lawn-title'>Lawn Care</h3>
                  <p className='snow-removal-text'>Make your order or book via mobile application</p>
                  <a className='app-download-link'>
                    <img className='app-download-pic' src={require('../../images/app_store.png')} />
                  </a>
                  <a className='app-download-link'>
                    <img className='app-download-pic' src={require('../../images/google_play.png')} />
                  </a>
                  <ol className='car-wash-list'>
                    <li className='car-wash-list-item'>High-quality service</li>
                    <li className='car-wash-list-item'>Reasonable prices</li>
                  </ol>
                </div>
              </div>

              <div className='car-wash-prices'>
                <h4 className='car-wash-prices-subtitle'>Lawn Care Services</h4>

                  <div className='lawn-care-packages'>
                    <div className='regular-prices-div'>
                      <div className='package-div'>
                        <div>
                          <span className='package-name'>One time mowing service</span><br/>
                          <p>0-1000 Square ft</p>
                        </div>
                        <span className='package-price'>$30.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>One time mowing service</span><br/>
                          <p>(1000-2500 Square ft)</p>
                        </div>
                        <span className='package-price'>$35.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>One time mowing service</span><br/>
                          <p>(2500-4500 Square ft)</p>
                        </div>
                        <span className='package-price'>$40.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>One time mowing service</span><br/>
                          <p>(4500-6500 Square ft)</p>
                        </div>
                        <span className='package-price'>$45.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>One time mowing service</span><br/>
                          <p>(6500-8500 Square ft)</p>
                        </div>
                        <span className='package-price'>$50.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>One time mowing service</span><br/>
                          <p>(Over 8500 Square ft)</p>
                        </div>
                        <span className='package-price'>Call for a Quote</span>
                      </div>
                      <hr className='packages-underline'/>
                    </div>
                
                    <div className='seasonal-packages-div'>
                      <div className='package-div'>
                        <div>
                        <span className='package-name'>Seasonal package: 6 times </span><br/>
                          <p>(0-1000 Square ft)</p>
                        </div>
                        <span className='package-price'>$324.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>Seasonal package: 6 times </span><br/>
                          <p>(1000-2500 Square ft)</p>
                        </div>
                        <span className='package-price'>$378.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>Seasonal package: 6 times </span><br/>
                          <p>(2500-4500 Square ft)</p>
                        </div>
                        <span className='package-price'>$432.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>Seasonal package: 6 times </span><br/>
                          <p>(4500-6500 Square ft)</p>
                        </div>
                        <span className='package-price'>$486.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>Seasonal package: 6 times </span><br/>
                          <p>(6500-8500 Square ft)</p>
                        </div>
                        <span className='package-price'>$540.00</span>
                      </div>
                      <hr className='packages-underline'/>

                      <div className='package-div'>
                        <div>
                        <span className='package-name'>Seasonal package: 6 times </span><br/>
                          <p>(Over 8500 ft)</p>
                        </div>
                        <span className='package-price'>Call for a Qoute</span>
                      </div>
                      <hr className='packages-underline'/>
                  </div>
                </div>
                <div className='extra-info'>
                <span className='extra-info-text'>
                  <span className='extra-info-name'>Booking fee for one time mowing services: </span> 
                  5.00$. Booking fee is deducted from the total price of service.
                </span><br/>
                <span className='extra-info-text'>
                  <span className='extra-info-name'>Cancelation policy: </span> 
                  Booking fee is refundable if the booking is cancelled at least before 24 hours prior to the date/time of the booking.
                </span><br/>
                <span className='extra-info-text'>
                  <span className='extra-info-name'>Note: </span> 
                  There is no booking fee for seasonal packages. All seasonal packages must be paid in advance.
                </span>
              </div>
              </div>

              <div className='cleaning-steps-div'>
                <h4 className='cleaning-info-subtitle'>How it Works</h4>
                <hr className='cleaning-info-subtitle-underline' />
                <div>
                  <p className='step-1 step'>
                    Download our application on your phone and register an account.<br/><span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> is available on Google Play and App Store.</p>
                  <p className='step-2 step'>
                    Choose day and time, make secure payment for your order and our team will take care of the rest</p>
                  <p className='step-3 step'>
                    At your chosen time our team member will arrive at the location chosen by you and will start the lawn care procedure</p>
                  <p className='step-4 step'>
                    Enjoy your free time while your yard is being taken care of
                  </p>
                </div>
              </div>
            </div>
          </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Lawn
