import React, { Component } from 'react'
import './contacts.css';

export class Contacts extends Component {

  render() {
    return (
      <React.Fragment>
        <section id='contacts'>
          <div className='contacts-div'>
            <h2 className='contacts-title'>Contact Us</h2>
            <hr className='info-section-title-underline' />
            <div className='contact-list-div'>
              <div className='contacts-inner-div'>
                <ul className='contacts-list'>
                  <li className='contact-list-item'>
                    <span className='contact-item-name'>Email: </span> 
                    <a className='contact-list-item-link' href='mailto:info@done4u.ca'>info@done4u.ca</a></li>
                  <li className='contact-list-item'>
                    <span className='contact-item-name'>Phone: </span>
                  <a className='contact-list-item-link' href='tel:4162507299'>647 889 4095</a></li>
                  <li className='contact-list-item'>
                    <span className='contact-item-name'>Address: </span> 
                    <a className='contact-list-item-link' href='https://goo.gl/maps/gpdkFhX4Wu7BQBSD7' target='_blank'>155 Martin Ross Ave. Unit 1 North York, Toronto, ON Canada, M3J 2L9</a></li>
                </ul>
                <div className='social-media'>
                  <h4 className='social-media-title'>Find us on social media</h4>
                  <div className='social-media-div'>
                    <div className='social-media-item'>
                      <a className='social-media-link' href='https://www.facebook.com/done4canada' target='_blank'><i className="fab fa-facebook-square fa-3x"></i></a>
                    </div>
                    <div className='social-media-item'>
                      <a className='social-media-link' href='https://www.instagram.com/done4ucanada/' target='_blank'><i className="fab fa-instagram-square fa-3x"></i></a>
                    </div>
                    <div className='social-media-item'>
                      <a className='social-media-link' href='https://www.linkedin.com/company/done4u/' target='_blank'><i class="fab fa-linkedin fa-3x"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='maps'>
                <iframe
                    width="550"
                    height="400"
                    frameborder="0" style={{border: 'none'}}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAT5VfIsh-n1Yqe9J-QAAZ7_Ww2QWO7E6Y
                    &q=155+Martin+Ross+Ave+unit+1,Toronto+ON"
                    allowfullscreen>

                    {/* src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAT5VfIsh-n1Yqe9J-QAAZ7_Ww2QWO7E6Y
                    &q=155+Martin+Ross+Ave+unit+1,Toronto+ON" */}
                </iframe>
              </div>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default Contacts
