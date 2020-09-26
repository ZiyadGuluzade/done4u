import React, { Component } from 'react'
import './footer.css';

export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='footer'>
          <div className='footer-div'>
            <div className='footer-big-div'>
              <div clasName='footer-column'>
                <img className='footer-logo' src={require('../../images/transparent_logo.png')} />
              </div>
              <div clasName='footer-column'>
                <h4 className='footer-subtitle'>Contact</h4>
                <hr className='footer-subtitle-underline'/>
                <ul className='footer-info-list'>
                  <li className='footer-info-list-item'>Email: <a className='footer-mail' href='mailto:info@done4u.ca'>info@done4u.ca</a></li>
                  <li className='footer-info-list-item'>Phone: (647) 889 4095</li>
                </ul>
                <div className='social-media-div-footer'>
                      <div className='social-media-item-footer'>
                        <a className='social-media-footer-link' href='https://www.facebook.com/done4canada' target='_blank'><i class="fab fa-facebook-square fa-2x"></i></a>
                      </div>
                      <div className='social-media-item-footer'>
                        <a className='social-media-footer-link' href='https://www.instagram.com/done4ucanada/' target='_blank'><i class="fab fa-instagram-square fa-2x"></i></a>
                      </div>
                      <div className='social-media-item-footer'>
                        <a className='social-media-footer-link' href='https://www.linkedin.com/company/done4u/' target='_blank'><i class="fab fa-linkedin fa-2x"></i></a>
                      </div>
                    </div>
              </div>
            </div>

            <div className='footer-big-div'>
              <div clasName='footer-column'>
                <h4 className='footer-subtitle'>Download here</h4>
                <hr className='footer-subtitle-underline'/>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/app_store.png')} />
                </a>
                <br/>
                <a className='app-download-link'>
                  <img className='app-download-pic' src={require('../../images/google_play.png')} />
                </a>
              </div>
              <div clasName='footer-column'>
                <h4 className='footer-subtitle'>Info</h4>
                <hr className='footer-subtitle-underline'/>
                <ul className='footer-info-list'>
                  <li className='footer-info-list-item'>
                    <a className='footer-link' href='./carwash'>Car Wash</a>
                  </li>
                  <li className='footer-info-list-item'>
                    <a className='footer-link' href='./lawn-services'>Lawn Services</a>
                  </li>
                  <li className='footer-info-list-item'>
                    <a className='footer-link' href='./snow-removal'>Snow Removal</a>
                  </li>
                  <li className='footer-info-list-item'>
                    <a className='footer-link' href='./snow-removal'>House Cleaning</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Footer
