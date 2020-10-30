import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import NFTMining from './assets/images/nft_mining.png';
import './assets/styles/Influencers.css';

export class MemeNftMining extends Component {
  render() {
    return (
      <div className='Top-Div' style={{ marginTop: 90 }}>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>CREATOR MEME (NFT) MINING</h2>
                    <p className='Slide-Title-Desc text-center'>
                      Make community or content creator Memes into collectables
                      with NFT's and issue them to the token holders who stake
                      the most of a communities' or a creator's token. Users can
                      earn collectable memes by staking the tokens of a creator
                      or a community
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <ReactWOW animation='flipInX'>
                  <div className='col-md-7'>
                    <img
                      src={NFTMining}
                      alt='Token System'
                      style={{ width: '100%' }}
                      className='mt-3'
                    />
                    <hr className='mt-2' />
                    <div className='row' style={{ marginBottom: '8px' }}>
                      <div className='col-md-12'>
                        <strong>NOTE:</strong> Staking a creator's token to mine
                        NFT Memes is the a similar idea to holding a stock and
                        receiving dividends
                      </div>
                      
                    </div>
                  </div>
                </ReactWOW>
                <div className='col-md-5'>
                  <div className='Sub-Slide-Header' style={{ marginTop: '0' }}>
                    <div className='row'>
                      <div className='col-12'>
                        <h5>
                          NFT Memes are like rare, collectable football cards
                          and can hold significant value
                        </h5>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-2'>
                            <img
                              alt='list icon'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg=='
                            />
                          </div>
                          <div className='col-10'>
                            Users can earn collectable memes by staking the
                            tokens of a creator or a community
                          </div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-2'>
                            <img
                              alt='list icon'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg=='
                            />
                          </div>
                          <div className='col-10'>
                            Collect your favourite Memes by displaying them on
                            the front ends of your community or creators
                          </div>
                        </div>

                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-2'>
                            <img
                              alt='list icon'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg=='
                            />
                          </div>
                          <div className='col-10'>
                            NFT Meme collectables will drive demand for the
                            creator's tokens and create a new value capture
                            mechanism, similar to how stocks capture value for
                            investors, except this will be like the stock market
                            for individuals and communities
                          </div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-2'>
                            <img
                              alt='list icon'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg=='
                            />
                          </div>
                          <div className='col-10'>
                            Prove the authenticity of your collectable meme NTF
                            by being able to verify that its original issuer was
                            the creator themselves
                          </div>
                        </div>
                      </div>
                    </div>
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

export default MemeNftMining;
