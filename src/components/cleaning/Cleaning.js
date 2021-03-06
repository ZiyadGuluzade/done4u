import React, { Component } from 'react'
import './cleaning.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import CleaningPrices from '../cleaningprices/CleaningPrices';

export class Cleaning extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <section id='cleaning'>
          <div clasName='cleaning-div'>
            <div className='cleaning-header'>
              <div className='cleaning-img-div'>
                <img className='cleaning-img' src={require('../../images/house_cleaning_1.jpeg')} />
              </div>
              <div className='cleaning-text-div'>
                <h3 className='car-wash-title'>House Cleaning</h3>
                <p className='car-wash-text'>Make your order or book via mobile application</p>
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
                <h4 className='car-wash-prices-subtitle'>House Cleaning Prices</h4>
                <CleaningPrices housetype='1 Bedroom' price='$75.00' />
                <hr className='packages-underline'/>
                <CleaningPrices housetype='2 Bedrooms' price='$95.00' />
                <hr className='packages-underline'/>
                <CleaningPrices housetype='3 Bedrooms' price='$125.00' />
                <hr className='packages-underline'/>
                <CleaningPrices housetype='4 Bedrooms' price='$150.00' />
                <hr className='packages-underline'/>
                <CleaningPrices housetype='5 Bedrooms' price='$200.00' />
                <hr className='packages-underline'/>
                <CleaningPrices housetype='6 Bedrooms' price='Call for a Quote' />
                <hr className='packages-underline'/>
                <CleaningPrices housetype='1 hour' price='$35.00' />

                <div className='extra-info'>
                  <span className='extra-info-text'>
                    <span className='extra-info-name'>Booking fee: </span> 
                    20.00$. Booking fee is deducted from the total price of service.
                  </span><br/>
                  <span className='extra-info-text'>
                    <span className='extra-info-name'>Cancelation policy: </span> 
                    Booking fee is refundable if the booking is cancelled at least before 24 hours prior the date & time of the booking. Booking fee is non-refundable if booking is canceled less than 24 hours prior the date & time of the booking.
                  </span><br/>
                </div>
            </div>

            <div className='cleaning-steps-div'>
              <h4 className='cleaning-info-subtitle'>How it Works</h4>
              <hr className='cleaning-info-subtitle-underline' />
              <div>
                <p className='step-1 step'>
                  Download our application on your phone and register.<br/><span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> is available on Google and App Store.</p>
                <p className='step-2 step'>
                  Choose day and time for a cleanup, make payment for your order and our team will take care of the rest</p>
                <p className='step-3 step'>
                  At your chosen time our experienced cleaner will arrive at the location chosen by you and will start the cleaning procedure</p>
                <p className='step-4 step'>
                  Enjoy your free time while your house is being taken care of
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

export default Cleaning;
