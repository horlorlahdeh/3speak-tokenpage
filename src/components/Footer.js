import React, {Component} from 'react';
import './assets/styles/Footer.css';
// import { FooterSpeakLogo } from '../assets/3S_logo.png'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className="container">
          <div className='row'>
            <div className='col-md-3'>
              <img
                src='http://localhost:3000/static/media/3S_logo.1bac8eb7.png'
                alt='Twitter'
                className='footer-img'
              />
              <p className='contact-email'><i class='fa fa-envelope' aria-hidden='true'></i>helpdesk@3speak.co</p>
              <p className='contact-email'><i class='fa fa-globe ' aria-hidden='true'></i>3speak.co</p>
            </div>
            <div className='col-md-2'>
              <h6 className='footer-items-title'>Company</h6>
              <ul className='footer-icons' style={{ padding: 0 }}>
                <li className='icon-item'>
                  <a className='footer-links' href="">About Us</a>
                </li>
                <li className='icon-item'>
                  <a className='footer-links' href="">FAQ</a>
                </li>
                <li className='icon-item'>
                  <a className='footer-links' href="">Terms</a>
                </li>
                </ul>
            </div>
            <div className='col-md-3'>
              <h6 className='footer-items-title'>Accepted Payment Methods</h6>
              <ul className='footer-icons' style={{ padding: 0 }}>
                <li className='icon-item d-flex'>
                  <img src="https://hive.cdn.3speakcontent.co/hive-branding/logo/png/logo_transparent@1.png" className='hive-footer-icon' alt=""/><a className='footer-links' href="">About Us</a>
                </li>
                
                </ul>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </div>
    )
  }
}
