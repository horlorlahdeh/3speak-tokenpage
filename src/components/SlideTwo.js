import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';

import './assets/styles/SlideTwo.css';

export class SlideTwo extends Component {
  render() {
    return (
      <div className="Slide-Two-Wrapper">
        <ReactWOW animation="slideInLeft">
          <section className="SlideTwo">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="Slide-Header">
                    <h2 className="Slide-Title">
                      CURRENT SITUATION WITH ONLINE MEDIA
                    </h2>
                    <p className="Slide-Title-Desc text-center">
                      Web 2.0 poses some set of challenges common on traditional
                      web and social interfaces. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Praesent rhoncus ultricies
                      nibh, vitae sodales purus. Aenean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
      </div>
    );
  }
}

export default SlideTwo;
