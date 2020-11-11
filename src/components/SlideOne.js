import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import ReactWOW from 'react-wow';
// import {OnlineMedia} from './assets/images/online_media.png'
import './assets/styles/SlideOne.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export class SlideOne extends Component {
  
  render() {
    return (
      <div className='Slide-One-Wrapper Top-Div'>
        <div className='bg-div'></div>
        <div className='bg-div2'></div>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideOne'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>
                      CURRENT SITUATION WITH ONLINE MEDIA
                    </h2>
                    <p className='Slide-Title-Desc text-center'>
                      Web2.0 centralises power on social media platforms to a small group of people.  This results in corruption, censorship, and a polarisation on political and social views.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
        
          <div className='choose-us-wrapper'>
            <div className='container'>
              <div className='row' data-wow-offset='100000'>
                <div className='col-md-7'>
                  {/*<div className="choose-us-title">
                    <h2> Why Choose Us?</h2>
                    <p className='current-state-text'>
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Quisque lacus dui,
                      interdum sit amet varius.
                    </p>
                  </div>*/}

                  <div className='choose-us-des'>
                    <div className='choose-us-item'>
                      
                        <div className='first'>
                          <div className='icon-wrapper'>
                            {/* <ReactWOW animation="slideInUp"> */}
                            <img alt="phone" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg==' />
                            {/* </ReactWOW> */}
                          </div>

                          <h3>LACK OF ENTERPRISE GRADE YOUTUBE COMPETITION</h3>
                          <p className='current-state-text'>
                            Without significant funding much of the competition that provides valuable alternatives to youtube is not able to provide a high quality, experience with convenience built in
                          </p>
                        </div>
                      
                    </div>
                    <div className='choose-us-item'>
                      
                        <div className='second'>
                          <div className='icon-wrapper'>
                            <img alt="phone" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg==' />
                          </div>

                          <h3>
                            SLIPPERY SLOPE TO CENSORSHIP AND AUTHORITARIANISM
                          </h3>
                          <p className='current-state-text'>
                            Legacy Web2.0 platforms are centralised. Their centralised nature results in excessive amounts of power in the hands of a small few at the top of the social media platforms.  These positions are susceptible to subversion by authoritarians and anti-free speech activists.
                          </p>
                        </div>
                     
                    </div>
                    <div className='choose-us-item'>
                      
                        <div className='third'>
                          <div className='icon-wrapper'>
                            <img alt="phone" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg==' />
                          </div>

                          <h3>CREATORS BEING ACTIVELY CENSORED</h3>
                          <p className='current-state-text'>
                            It has been clearly demonstrated that the centralised web2.0 platforms have censored political views.  Censorship in a civilised society is abhorrent and unacceptable.
                          </p>
                        </div>
                      
                    </div>
                    <div className='choose-us-item'>
                     
                        <div className='fourth'>
                          <div className='icon-wrapper'>
                            <img alt="phone" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVRoge2ZXWgcVRTHf2c3SQttrcaKH0WNOzO7YEWheYjiBwh+FC22lYAFW+hDW7XNbquVgg/WKL5oUdvM2kKwiAhBFAs1mKoVGhG1FuxDIVV3Z9dQSxG1qVYTk2Z3jg/NtttQk5nJ7GaR/GDhzs45557/3r333LkDM9QWMv4L00y2qpBSWCwwp4q5nBHkW1f01XzG/tyv80VCDCu1A3RTeLkFQ1TXOk56jx+fSKlhmsnWWhABmi8U3I/9ep0XokIq3IQC8ZsWI0v6+3f9kki03eTH8YIQWBx+Xr4YEnWX5fMd2VgsZRVc+dSPc12pUeWJPZ5RRFud7JvfJBJt1xWKegC40U+AuslNKo4q+kQ+k94fi62fX3SlB/EnAmpAiCrP5Z30201Na2ZLdFa3wm1B4kQmN6kcArvzjv0KtEci9fPeBe4OGmv6RkTkAyfT2AZgWqfSCq3/ZWpYSQVQGAT9DmRnPmvvLbeZnhERDoqrq6HdNay25xWe8ubGHEHuEfgwZiZfK783HUKOamFkhePYI2Y8tRbkxSBBRHjGiKdWlK6rLeQEbnFpPt/5Z8zauFRVd3OJ/Z5n9MJOpJpCThVF78/ldv1sWZtaIPIeU5+jzaVGtYT8Q0SX9WfSP5hm8mbF7QmpAM8tNTwLEeEl4FiAzgqiPJb7Mf1VPP70QhX2KzQGiDMh3oQI7zsZ+4XRkcJdwBc+4quoPuk4dndT0+bLi1r4BLghSKKT4U2IstyIp1YeP7779OyGKx8QpMtj/G2Ok97T1LRmdrS++BFwS+BMJ8HrX6sB1S7DSj3b19d+1sl2rBKZbNnUzlzWfjmMqu0FP5NdQLcbVnIngJPpaBeRdUBhvKFC9/ULF2wEMKzfd8gEVTssgqxaKSOefKe5eX29k+l4S1RagaGy+4eGB0dW9va2F2JmchtIMqRcJyTY8qus/uPMrJ5EYus8x+nY5wr3Ar8Cx0Ya6h4+ebJzyIyn1ooQqGoHYSp15L5Rd+hAPL5lwU8Z+zBu8U5RHjzR98aAabY9Mla1q8aUKqsgLUU9e8gwNizJ5XY5AJa1qaWI2yVV3lmH0ZlBNPqlaSYfAkZCrNq+COdXU65R4SDwFxWo2l4Ic/jnj32mhWl91A2TGSG1xoyQWqNcyN/TlsWlOePHuOwQW4+En8uUOAKQSGyd58W4bERkZ2XyCYao7AAoFgc9PYydF5LP2ntVeb1Siflku+N07ANwI9FVXhwumux5x96CyKNA77njyeox1l+vqCzPZe2tAIaRahbVdV78gx+OVRjDSDUT0W7g2onscllboAZeK5SzaNGGucPDdbdqlMc5NxL1Xn19CSmdileK4bNARJEAvfwvC6IXarZo+hJSq0UTfI9IbRZNgKgfx9MDh7+/orHlMhHuCD8t32zPOXa6dOFLCMDpgcOfNS64/ShwtcJVAg2hpjcBCoMCX4vK5nIRM9Qi/wLXg3O+6UDT0QAAAABJRU5ErkJggg==' />
                          </div>

                          <h3>LEADS TO EXTREMISM</h3>
                          <p className='current-state-text'>
                            Cancelling and censoring users drives them under ground to clandestine networks.  This results in extremist views not being challenged and debated in public.  It results in an increase of extremism, not reduction. It also allows the big tech legacy platforms to control the narrative, which also results in its own forms of extremism.
                          </p>
                        </div>
                      
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='Censorship-Image-Wrapper'>
                    
                      <img
                        className='Censorship-Image'
                        src={require('./assets/images/online_media.png')}
                        alt='iphone'
                      />
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default SlideOne;
