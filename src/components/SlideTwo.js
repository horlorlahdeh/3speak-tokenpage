import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/SlideTwo.css';

export class SlideTwo extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      centerPadding: '10px',
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='Slide-Two-Wrapper'>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>SPEAK YOUR TRUTH</h2>
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
        <div className='container'>
          <Slider {...settings}>
            <div>
              <div className=''>
                <div className='each-slide'>
                  <div
                    className='content slick-card-content'
                    style={{ height: '100%' }}
                  >
                    <img
                      className='card-img'
                      src='https://img.icons8.com/color/96/000000/workstation.png'
                      style={{
                        marginTop: 40,
                        maxWidth: '96px',
                      }}
                    />
                    <h3 className='text-white'>High Performance</h3>

                    <h5
                      className='text-white text-center'
                      style={{ marginTop: 55, width: '80%' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum, aperiam necessitatibus. Nobis velit recusandae
                      quaerat, deserunt vero incidunt iusto est fuga expedita
                      quasi illum praesentium quam repellat ab consequatur.
                      Laudantium? &nbsp;
                      <i className='fa fa-chevron-circle-right' />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=''>
                <div className='each-slide'>
                  <div
                    className='content slick-card-content'
                    style={{ height: '100%' }}
                  >
                    <img
                      className='card-img'
                      src='https://img.icons8.com/color/96/000000/private.png'
                      style={{
                        marginTop: 40,
                        maxWidth: '96px',
                      }}
                    />
                    <h3 className='text-white'>Anti-Censorship</h3>

                    <h5
                      className='text-white text-center'
                      style={{ marginTop: 55, width: '80%' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum, aperiam necessitatibus. Nobis velit recusandae
                      quaerat, deserunt vero incidunt iusto est fuga expedita
                      quasi illum praesentium quam repellat ab consequatur.
                      Laudantium? &nbsp;
                      <i className='fa fa-chevron-circle-right' />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=''>
                <div className='each-slide'>
                  <div
                    className='content slick-card-content'
                    style={{ height: '100%' }}
                  >
                    <img
                      className='card-img'
                      src='https://img.icons8.com/color/96/000000/hdtv.png'
                      style={{
                        marginTop: 40,
                        maxWidth: '96px',
                      }}
                    />
                    <h3 className='text-white'>HD Videos</h3>

                    <h5
                      className='text-white text-center'
                      style={{ marginTop: 55, width: '80%' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum, aperiam necessitatibus. Nobis velit recusandae
                      quaerat, deserunt vero incidunt iusto est fuga expedita
                      quasi illum praesentium quam repellat ab consequatur.
                      Laudantium? &nbsp;
                      <i className='fa fa-chevron-circle-right' />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlideTwo;
