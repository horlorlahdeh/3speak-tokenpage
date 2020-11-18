import React, { Component } from 'react';
// import ReactWOW from 'react-wow';
import RoadmapImg from './assets/images/roadmap.png';

import './assets/styles/Roadmap.css';

export class Roadmap extends Component {
  render() {
    return (
      <div className='Roadmap-Wrapper'>
       
          <div className='Roadmap-Image'>
            <div className='container'>
              <div className='Slide-Header'>
                <img src={RoadmapImg} alt='Roadmap' width='100%' />
              </div>
            </div>
          </div>
       
      </div>
    );
  }
}

export default Roadmap;
