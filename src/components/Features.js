import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/SlideTwo.css';

export class Features extends Component {
  render() {
    // let settings = {
    //   dots: true,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 1000,
    //   centerPadding: '10px',
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };

    return (
      <div className='Slide-Two-Wrapper'>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>3SPEAK FEATURES</h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak offers users various benefits and advantages based
                      on some specific features that separates it from other
                      video sharing platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Account owned on blockchain level</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Live Streaming</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>High performance</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Censorship Resistant</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>HD Videos</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Simple to Use</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Fast Encoding on Desktop</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Local encoding option</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Citizen Journalism </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Leader Board System </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Engagement Rewards </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                        alt='Features'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                      />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Decentralised Autonomous Organisation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
