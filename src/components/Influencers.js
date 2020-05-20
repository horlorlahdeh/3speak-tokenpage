import React, { Component } from 'react';
import ReactWOW from 'react-wow';

import "./assets/styles/Influencers.css";

export class Influencers extends Component {
  render() {
    return (
      <div>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo' style={{ marginTop: '100px' }}>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>INLUENCERS</h2>
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
        <section style={{ paddingTop: 50 }}>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 cus-padding'>
                <div>
                  <div className='customer-svg'>
                    <img
                      className='cus-img-bckgrd1'
                      src='https://img.icons8.com/color/96/000000/user-male-circle.png'
                    />
                  </div>
                  <p className='cus-p'>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum, aperiam necessitatibus. Nobis velit recusandae
                    quaerat,me.”
                  </p>
                  <h4>John Doe</h4>
                </div>
              </div>
              <div className='col-sm-3 cus-padding'>
                <div>
                  <div className='customer-svg'>
                    <img
                      className='cus-img-bckgrd2'
                      src='https://img.icons8.com/color/96/000000/user-male-circle.png'
                    />
                  </div>
                  <p className='cus-p'>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum, aperiam necessitatibus. Nobis velit recusandae
                    quaerat,”
                  </p>
                  <h4>John Doe</h4>
                </div>
              </div>
              <div className='col-sm-3 cus-padding'>
                <div className='customer-svg'>
                  <img
                    className='cus-img-bckgrd3'
                    src='https://img.icons8.com/color/96/000000/user-male-circle.png'
                  />
                </div>
                <div>
                  <p className='cus-p'>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum,.
                    <br /> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum, aperiam necessitatibus. Nobis velit recusandae
                    quaerat,."
                    
                  </p>
                  <h4>John Doe</h4>
                </div>
              </div>
              <div className='col-sm-3 cus-padding'>
                <div className='customer-svg'>
                  <img
                    className='cus-img-bckgrd4'
                    src='https://img.icons8.com/color/96/000000/user-male-circle.png'
                  />
                </div>
                <div>
                  <p className='cus-p'>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum, aperiam necessitatibus..
                    <br />
                   
                    Lorem dolor sit amet, consectetur adipisicing .”
                  </p>
                  <h4>John Doe</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Influencers;
