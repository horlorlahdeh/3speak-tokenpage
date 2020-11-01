import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
import DecentralizedStorageImage from './assets/images/decentralized_storage.png';

class DecentralizedStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMoreCommunityDriven: false,
      readMoreCensorshipResistant: false,
      readMoreScalable: false,
      communityDrivenText:
        'FreeSpeech will be driven and decided upon by the community of users who support the storage of your content.  The self-hosting content creator and their community will decide what is allowed and what is not allowed',
      censorshipResistantText:
        'A separate desktop app that stores the videos every time a user clicks play so that the videos are backed up far and wide making them harder to censor. This also means that even if 3peak the Web app platform is shut down, the desktop app can just be downloaded. This automatically plugs into the 3Speak back up storage network so that content lives on, even if our web platform is attacked.',
      scalableBackend:
        'Our Communities are built in such a manner that any external video platform can plug in to contribute to the network and earn tokens. We invite all independent platforms and creators to join us and help us to store their content on the 3Speak network and be rewarded with mining rewards in exchange',
    };
  }
  render() {
    return (
      <div className='WebVersion-Wrapper Top-Div' style={{ marginTop: 90 }}>
        <div className='bg-div'></div>
        <div className='bg-div2'></div>
        <ReactWOW animation='slideInLeft'>
          <section className='WebVersion'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>
                      DECENTRALIZED STORAGE / NETWORK SERVICE NODES
                    </h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak solves the above issues by creating a network of
                      low cost, easy to run, distributed storage, service and
                      token transaction validation nodes that are maintained by
                      members of the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
        <div className='container'>
          <ReactWOW animation='slideInUp'>
            <div
              className='row entire-row'
              data-wow-offset='100000'
              style={{ marginBottom: '150px' }}
            >
              <div className='col-md-4'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <img
                      className='account-img'
                      src='https://img.icons8.com/bubbles/100/000000/man-in-red-shirt-messaging.png'
                      alt='free-speech'
                    />
                  </div>
                  <div className='own-card-title'>
                    <h4>Community Driven Free Speech</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreCommunityDriven
                        ? this.state.communityDrivenText.substring(0, 100) +
                          ' ...'
                        : this.state.communityDrivenText}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreCommunityDriven: !this.state
                            .readMoreCommunityDriven,
                        });
                      }}
                    >
                      {this.state.readMoreCommunityDriven
                        ? 'Read less'
                        : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='pulse'>
                      <img
                        className='community-img'
                        src='https://img.icons8.com/bubbles/100/000000/fraud.png'
                        alt='Censor'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Censorship Resistant</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreCensorshipResistant
                        ? this.state.censorshipResistantText.substring(0, 100) +
                          ' ...'
                        : this.state.censorshipResistantText}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreCensorshipResistant: !this.state
                            .readMoreCensorshipResistant,
                        });
                      }}
                    >
                      {this.state.readMoreCensorshipResistant
                        ? 'Read less'
                        : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='jello'>
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/bullish.png'
                        alt='Scale'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Scalable Backend</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreScalable
                        ? this.state.scalableBackend.substring(0, 100) + ' ...'
                        : this.state.scalableBackend}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreScalable: !this.state.readMoreScalable,
                        });
                      }}
                    >
                      {this.state.readMoreScalable ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ReactWOW>

          <div className='row entire-row'>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
              <img
                src={DecentralizedStorageImage}
                alt='DecentralizedStorageImage'
                className='section-image'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DecentralizedStorage;
