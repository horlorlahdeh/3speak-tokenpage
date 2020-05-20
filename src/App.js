import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
import './assets/styles/App.css';


import MyJumbotron from './components/Jumbotron';
import WebVersion from './components/WebVersion';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import SlideThree from './components/SlideThree';
import SlideFour from './components/SlideFour';
import Roadmap from './components/Roadmap';
import Influencers from './components/Influencers';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyJumbotron />
      <WebVersion />
      <SlideOne />
      <SlideThree />
      <Influencers />
      <SlideTwo />
      <SlideFour />
      <Roadmap />
      <GetStarted />
      <hr className="divider" style={{marginTop: 0, marginBottom: 0, borderTop: '0!important', }} />
      <Footer />
    </div>
  );
}

export default App;