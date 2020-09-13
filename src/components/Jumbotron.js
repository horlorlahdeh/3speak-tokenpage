import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
// import JumbotronBg from "./assets/images/jumbotron-bg.jpg";
import SpeakLogo from "./assets/images/3S_logo.png";
import "./assets/styles/Jumbotron.css";
// import ReactDOM from "react-dom";
import ReactWOW from "react-wow";

export class MyJumbotron extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    // List of sentences
    let _CONTENT = ["TOKENIZED", "DECENTRALIZED", "IMMUTABLE"];

    // Current sentence being processed
    let _PART = 0;

    // Character number of the current sentence being processed
    let _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    let _INTERVAL_VAL;

    // Element that holds the text
    let _ELEMENT = document.querySelector("#text");

    // Implements typing effect
    function Type() {
      let text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX++;

      // If full sentence has been displayed then start to delete the sentence after some time
      if (text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
          _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
      }
    }

    // Implements deleting effect
    function Delete() {
      let text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
      _ELEMENT.innerHTML = text;
      _PART_INDEX--;

      // If sentence has been deleted then start to display the next sentence
      if (text === '') {
        clearInterval(_INTERVAL_VAL);

        // If last sentence then display the first one, else move to the next
        if (_PART === (_CONTENT.length - 1))
          _PART = 0;
        else
          _PART++;
        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
          _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
      }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);

  }

  render() {
    return (
      <>
        <ReactWOW animation="fadeIn">
          <Jumbotron className="MyJumbotron">
            <div className="Jumbotron-Overlay">
              <ReactWOW animation="flipInY">
                <div className="SpeakLogo">
                  <img src={SpeakLogo} alt="logo" width="150" />
                </div>
              </ReactWOW>
              <h1 className="Jumbotron-Header-Text">
                <span
                  className="typewriter"
                  style={{ color: "#6BC5D7" }}
                  id="text"
                />{" "}
                VIDEO COMMUNITIES !{" "}
              </h1>
              <p className="Jumbotron-Header-Desc">
                Welcome to 3Speak, a decentralized video sharing platform
              </p>
              <p>
                <Button className="btn-lg Jumbotron-Button" variant="primary">
                  Learn more
                </Button>
              </p>
            </div>
          </Jumbotron>
        </ReactWOW>
      </>
    );
  }
}

export default MyJumbotron;
