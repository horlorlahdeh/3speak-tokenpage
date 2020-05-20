import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import RoadmapImg from './assets/images/roadmap.png';

import './assets/styles/Roadmap.css';

export class Roadmap extends Component {
  render() {
    return (
      <div className='Roadmap-Wrapper'>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header' style={{ marginBottom: 0 }}>
                    <h2 className='Slide-Title'>ROADMAP</h2>
                    <p className='Slide-Title-Desc text-center'>
                      Speak you truth on 3Speak.online while airing your opinion
                      without any fear of censorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
        <ReactWOW animation='fadeIn'>
          <div className='Roadmap-Image'>
            <div className='container'>
              <div className='Slide-Header'>
                <img src={RoadmapImg} alt='Roadmap' width='100%' />
              </div>
            </div>
          </div>
        </ReactWOW>
      </div>
    );
  }
}

export default Roadmap;
