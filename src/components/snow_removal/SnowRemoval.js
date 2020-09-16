import React, { Component } from 'react'
import './snowremoval.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export class SnowRemoval extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <section id='snow-removal'>
            <div clasName='snow-removal-div'>
              <div className='snow-removal-header'>
                <div className='snow-removal-img-div'>
                  <img className='snow-removal-img' src={require('../../images/snow_removal.jpg')} />
                </div>
                <div className='snow-removal-text-div'>
                  <h3 className='snow-removal-title'>Snow Removal</h3>
                  <p className='snow-removal-text'>Make your order or book via mobile application</p>
                  <a className='app-download-link'>
                    <img className='app-download-pic' src={require('../../images/app_store.png')} />
                  </a>
                  <a className='app-download-link'>
                    <img className='app-download-pic' src={require('../../images/google_play.png')} />
                  </a>
                  <ol className='car-wash-list'>
                    <li className='car-wash-list-item'>High-quailty service</li>
                    <li className='car-wash-list-item'>Reasonable prices</li>
                  </ol>
                </div>
              </div>

              <div className='car-wash-prices'>
                <h4 className='car-wash-prices-subtitle'>Snow Removal Prices</h4>
                <div className='snow-removal-packages'>
                  <div className='single-snow-removal'>
                    <div className='package-div'>
                      <div>
                        <span className='package-name'>One time Snow Removal</span><br/>
                        <p>1, 2, 3 or 4 car driveway</p>
                      </div>
                      <span className='package-price'>$250.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>One time Snow Removal</span><br/>
                        <p>6, 8 or 10 car driveway</p>
                      </div>
                      <span className='package-price'>$250.00</span>
                    </div>
                    <hr className='packages-underline'/>
                  </div>

                  <div className='seasonal-snow-removal'>
                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>1 car driveway</p>
                      </div>
                      <span className='package-price'>$350.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>2 car driveway</p>
                      </div>
                      <span className='package-price'>$450.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>3 car driveway</p>
                      </div>
                      <span className='package-price'>$500.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>4 car driveway</p>
                      </div>
                      <span className='package-price'>$550.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>5 car driveway</p>
                      </div>
                      <span className='package-price'>$600.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>6 car driveway</p>
                      </div>
                      <span className='package-price'>$650.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>8 car driveway</p>
                      </div>
                      <span className='package-price'>$800.00</span>
                    </div>
                    <hr className='packages-underline'/>

                    <div className='package-div'>
                      <div>
                        <span className='package-name'>Seasonal Package</span><br/>
                        <p>10 car driveway</p>
                      </div>
                      <span className='package-price'>$1000.00</span>
                    </div>
                    <hr className='packages-underline'/>
                  </div>
                </div>

                <div className='extra-info'>
                  <span className='extra-info-text'>
                    <span className='extra-info-name'>Booking fee for one time snow removal: </span> 
                    30.00$. Booking fee is deducted from the total price.
                  </span><br/>
                  <span className='extra-info-text'>
                    <span className='extra-info-name'>Cancelation policy: </span> 
                    Booking fee is refundable if the booking is cancelled at least 24 hours prior to the date & time of the booking. Booking fee is non-refundable if the booking is canceled less than 24 hours prior to the date & time of the booking.
                  </span><br/>
                  <span className='extra-info-text'>
                  <span className='extra-info-name'>Note: </span> 
                  There is no booking fee for seasonal packages. All seasonal packages must be paid in advance.
                </span>
                </div>
              </div>

                

              <div className='cleaning-steps-div'>
                <h4 className='cleaning-info-subtitle'>How it Works</h4>
                {/* <hr className='cleaning-info-subtitle-underline' /> */}
                <div>
                  <p className='step-1 step'>
                    Download our application on your phone and register an account.<br/><span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> is available on Google Play and App Store.</p>
                  <p className='step-2 step'>
                    Choose day and time for the snow removal, make secure payment for your order and our team will take care of the rest</p>
                  <p className='step-3 step'>
                    At your chosen time our team member will arrive at the location chosen by you and will start the snow removal procedure</p>
                  <p className='step-4 step'>
                    Enjoy your free time while your property is being taken care of
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

export default SnowRemoval
