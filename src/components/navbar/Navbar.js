import React, { Component } from 'react'
import './navbar.css';

export class Navbar extends Component {

  state = {
    isClicked: false
  }

  render() {

    const isOn = this.state.isClicked;

    return (
      <React.Fragment>
        <nav className='nav'>
          <div className='logo'>
            <a alt='logo-link' href='/'> 
              <img className='logo-img' alt='logo' src={require('../../images/transparent_logo_copy.png')} />
            </a>
          </div>
          <div className={isOn ? 'nav-links nav-active' : 'nav-links'}>
            <ul className='nav-links-list'>
              <li className='nav-link-list-item'><a alt='home' href='/'>Home</a></li>
              <li className='nav-link-list-item'><a alt='about' href='/about'>About</a></li>
              <li className='nav-link-list-item'><a alt='home' href='/carwash'>Car Wash</a></li>
              <li className='nav-link-list-item'><a alt='about' href='/cleaning'>Cleaning</a></li>
              <li className='nav-link-list-item'><a alt='home' href='/lawn-services'>Lawn Care</a></li>
              <li className='nav-link-list-item'><a alt='about' href='/snow-removal'>Snow Removal</a></li>
              <li className='nav-link-list-item'><a alt='contact' href='/#contacts'>Contact</a></li>
              <li className='nav-link-list-item'><a alt='app' href='#'>App</a></li>
            </ul>
          </div>
          
          <div className='nav-burger' onClick={() => this.setState({isClicked: !isOn })}>
            <i className="fas fa-bars fa-2x nav-menu"></i>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;
