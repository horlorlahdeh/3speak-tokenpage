import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import ReactDOM from 'react-dom';
// import ReactWOW from 'react-wow';
import './assets/styles/App.css';



import MyJumbotron from './components/Jumbotron';
import WebVersion from './components/WebVersion';
import DecentralizedStorage from './components/DecentralizedStorage';
import TokenInflation from './components/TokenInflation';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import SlideThree from './components/SlideThree';
import SlideFour from './components/SlideFour';
import Roadmap from './components/Roadmap';
import Influencers from './components/Influencers';
import ContactForm from './components/ContactForm';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyJumbotron />
      <WebVersion />
      <SlideOne />
      <DecentralizedStorage />
      <TokenInflation />
      <SlideThree />
      <Influencers />
      <SlideTwo />
      <SlideFour />
      <Roadmap />
      <ContactForm />
      <GetStarted />
      {/* <hr className="divider" style={{marginTop: 0, marginBottom: 0, borderTop: '0!important', }} /> */}
      <Footer />
    </div>
  );
}

export default App;