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
import Features from './components/Features';
import CreateVideoSites from './components/CreateVideoSites';
import Tokenomics from './components/Tokenomics';
import TokenStaking from './components/TokenStaking';
import DesktopApp from './components/DesktopApp';
import IPFSStorage from './components/IPFSStorage';
import Communities from './components/Communities';
// import ClaimAirdrop from './components/ClaimAirdrop';
import Roadmap from './components/Roadmap';
import TokeniseCommunities from './components/TokeniseCommunities';
import MemeNftMining from './components/MemeNftMining';
import ContactForm from './components/ContactForm';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import BuiltWithHive from './components/BuiltWithHive';

function App() {
  return (
    <div className='App'>
      <MyJumbotron />
      <WebVersion />
      <SlideOne />
      <DecentralizedStorage />
      <TokenInflation />
      <TokeniseCommunities />
      <MemeNftMining />
      <Tokenomics />
      <TokenStaking />
      <Communities />
      <CreateVideoSites />
      <DesktopApp />
      <IPFSStorage />
      <Features />
      <Roadmap />
      <BuiltWithHive />
      <ContactForm />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
