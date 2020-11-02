import React, {Component} from 'react';
import './assets/styles/Footer.css';
import HiveLogo from './assets/images/hive-logo-sm.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className="container">
          <div className='row'>
            <div className="col-md-2"></div>
            <div className='col-md-3'>
              <img
                src={require('./assets/images/3S_logo.png')}
                alt='3S logo'
                className='footer-img'
              />
              <p className='contact-email'><i className='fa fa-envelope' aria-hidden='true'></i>helpdesk@3speak.co</p>
              <p className='contact-email'><i className='fa fa-globe ' aria-hidden='true'></i>3speak.co</p>
            </div>
            <div className='col-md-2'>
              <h6 className='footer-items-title'>Company</h6>
              <ul className='footer-icons' style={{ padding: 0 }}>
                <li className='icon-item'>
                  <a className='footer-links' href="#!">About Us</a>
                </li>
                <li className='icon-item'>
                  <a className='footer-links' href="#!">FAQ</a>
                </li>
                <li className='icon-item'>
                  <a className='footer-links' href="#!">Terms</a>
                </li>
                </ul>
            </div>
            <div className='col-md-3'>
              <h6 className='footer-items-title'>Accepted Payment Methods</h6>
              <ul className='footer-icons' style={{ padding: 0 }}>
                <li className='icon-item d-flex'>
                  <img src={HiveLogo} className='hive-footer-icon' alt=""/><a className='footer-links-img' href="#!">About Us</a>
                </li>
                
                </ul>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </div>
    )
  }
}
