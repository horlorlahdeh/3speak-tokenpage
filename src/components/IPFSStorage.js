import React, { Component } from 'react';
// import ReactWOW from 'react-wow';
import IPFSImage from './assets/images/ipfs_image.png';
import './assets/styles/TokenStaking.css';

export class IPFSStorage extends Component {
  render() {
    return (
      <div className='Top-Div' style={{ marginTop: 10 }}>
        
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>IPFS STORAGE BACKUP SYSTEM</h2>
                    <p className='Slide-Title-Desc text-center'>
                      The IPFS back up storage layer will provide platforms, creators and communities with a place to store their content by self hosting and by spreading back ups through the network. This provides maximum censorship resistance as their work will be secured by their own community members even in the case that their site is shut down
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                
                  <div className='col-md-10 offset-1'>
                    <img
                      src={IPFSImage}
                      alt='Desktop App'
                      style={{ width: '100%' }}
                    />
                  </div>
               
                </div>
            </div>
          </section>
        
      </div>
    );
  }
}

export default IPFSStorage;
