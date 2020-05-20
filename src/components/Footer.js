import React from 'react';
import './assets/styles/Footer.css';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='grid'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <ul className='footer-icons' style={{ padding: 0 }}>
            <li className='icon-item'>
              <img
                src='https://img.icons8.com/color/48/000000/twitter.png'
                alt='Twitter'
                className='social-img'
              />
            </li>
            <li className='icon-item'>
              <img
                src='https://img.icons8.com/color/48/000000/twitter.png'
                alt='Twitter'
                className='social-img'
              />
            </li>
            <li className='icon-item'>
              <img
                src='https://img.icons8.com/color/48/000000/twitter.png'
                alt='Twitter'
                className='social-img'
              />
            </li>
            <li className='icon-item'>
              <img
                src='https://img.icons8.com/color/48/000000/twitter.png'
                alt='Twitter'
                className='social-img'
              />
            </li>
          </ul>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}
