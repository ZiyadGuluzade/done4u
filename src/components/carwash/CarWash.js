import React, { Component } from 'react'
import './carwash.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export class CarWash extends Component {
  render() {
    return (
      <React.Fragment>
        
        <section id='car-wash'>
        <Navbar />
          <div className='car-wash-div'>
            <div className='car-wash-header'>
              <div className='car-wash-img-div'>
                <img className='car-wash-img' src={require('../../images/car_wash3.jpg')} />
              </div>
              <div className='car-wash-info-div'>
                <h3 className='car-wash-title'>Car Wash</h3>
                <p className='car-wash-text'>Make your order or book via mobile application</p>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/app_store.png')} />
                </a>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/google_play.png')} />
                </a>
                <ol className='car-wash-list'>
                  <li className='car-wash-list-item'>Eco-friendly cleaning</li>
                  <li className='car-wash-list-item'>Reasonable prices</li>
                  <li className='car-wash-list-item'>Time efficient procedure</li>
                </ol>
              </div>
            </div>
            <div className='car-wash-prices'>
              <h4 className='car-wash-prices-subtitle'>Car Wash Packages</h4>
              <div className='package-div'>

                <div>
                <span className='package-name'>Basic Package</span><br/>
                  <p>Exterior only, including tires and rims (at client's location)</p>
                </div>
                <span className='package-price'>$49.99</span>
              </div>
              <hr className='packages-underline'/>
              <div className='package-div'>
                <div>
                  <span className='package-name'>Silver Package</span>
                  <p>Exterior and interior: vacuum and basic detailing (at client's location)</p>
                </div>
                <span className='package-price'>$79.99</span>
              </div>
              <hr className='packages-underline'/>
              <div className='package-div'>
                <div>
                  <span className='package-name'>Gold Package</span>
                  <p>Exterior and interior: vacuum and basic detailing, engine (no water involved, at client's location)</p>
                </div>
                <span className='package-price'>$99.99</span>
              </div>
              <hr className='packages-underline'/>
              <div className='package-div'>
                <div>
                  <span className='package-name'>Luxury Package - Sedan Cars</span>
                  <p>Exterior and interior: vacuum, shampoo, full detailing, engine (no water involved, at <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> location)</p>
                </div>
                <span className='package-price'>$189.99</span>
              </div>
              <hr className='packages-underline'/>
              <div className='package-div'>
                <div>
                  <span className='package-name'>Luxury Package - SUV, VAN cars</span>
                  <p>Exterior and interior: vacuum shampoo, full detailing, engine (no water involved, at <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> location)</p>
                </div>
                <span className='package-price'>$199.99</span>
              </div>
              <div className='extra-info'>
                <span className='extra-info-text'>
                  <span className='extra-info-name'>Booking fee: </span> 
                  10.00$. Booking fee is deducted from the total price of service.
                </span><br/>
                <span className='extra-info-text'>
                  <span className='extra-info-name'>Cancelation policy: </span> 
                  Booking fee is refundable if the booking is cancelled at least 24 hours prior the date/time of the booking.
                </span><br/>
                <span className='extra-info-text'>
                  <span className='extra-info-name'>Note: </span> 
                  Please be advised that for any location farther than 10km from <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> location additional 3$ per 5km will be charged. Any place within the range of 10km from <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> location is free of charge.
                </span>
              </div>
            </div>

            <div className='car-wash-info-div'>
              <h4 className='car-wash-info-subtitle'>Waterless Car Wash: Benefits</h4>
              {/* <hr className='car-wash-info-subtitle-underline' /> */}
              <div className='info-boxes'>
                <div className='info-box-1'>
                  <span className='info-box-subtitle'>Long-Lasting Shine</span>
                  <p className='info-box-text'>Waterless wash and wax items produce durable sparkle. They develop a safety finish that grains water for a long period and also protect your vehicle from catalytic converter discharges, tar, pests, roadway grime, salt, etc</p>
                </div>
                <div className='info-box-2'>
                  <span className='info-box-subtitle'>A Protective Finish</span>
                  <p className='info-box-text'>Our waterless car cleaning products leave a protective surface on your car. This allows you to wipe  surface of your car tidy without scratcing it</p>
                </div>
                <div className='info-box-1'>
                  <span className='info-box-subtitle'>Protects Environment</span>
                  <p className='info-box-text'>Washing your car in your driveway with a pipe is about one of the most ecologically unfriendly points you could do. Waterless Car Wash saves aproximately 20-50 gallons of water per vehicle. You can increase your eco-friendly impact by using waterless car wash service at <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span>.</p>
                </div>
                <div className='info-box-2'>
                  <span className='info-box-subtitle'>Saves Time</span>
                  <p className='info-box-text'>The entire procedure of cleaning as well as waxing your car with a waterless formula generally takes around 30 minutes. On the  other hand, if you decide to wash  as well as wax your car the regular way, it can take hours of your precious time.</p>
                </div>
              </div>

              <div className='car-wash-steps-div'>
                <h4 className='car-wash-info-subtitle'>How it Works</h4>
                {/* <hr className='car-wash-info-subtitle-underline' /> */}
                <div>
                  <p className='step-1 step'>
                    Our team shall arrive to the place that you indicate in  your <span className='logo-span'>Done<span className='logo-inner-span'>4</span>U</span> application order. You can also drive your car to our designated parking lot. <br/>See address <a href='/#contacts'> here.</a></p>
                  <p className='step-2 step'>
                    A team of professionals will wash your car within 30-35 minutes using sertified detergents and special cloth without leaving any water or dirt on your pavement.</p>
                  <p className='step-3 step'>
                    If you picked a package that includes interior cleaning of your car, we shall ask you to open the car or give us the key. The vehicle is expected to be parked in a safe place where all doors can stay fully open.</p>
                  <p className='step-4 step'>
                    Enjoy your free time while your vehicle is being taken care of.
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </section>
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default CarWash
