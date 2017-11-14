import React, { Component } from 'react';

class OptionsBox extends Component {
  constructor() {
    super();
    this.handleResponseDisplay = this.handleResponseDisplay.bind(this);
    this.handleClearResponse = this.handleClearResponse.bind(this);

    this.state = {
      showResponse: false,
      response: ''
    };
  }

  handleResponseDisplay(e, response) {
    e.preventDefault();
    this.setState({
      showResponse: true,
      response
    });
    this.handleClearResponse();
  }

  handleClearResponse() {
    const setState = () => this.setState({
        showResponse: false,
        response: ''
      });

    setTimeout(setState, 2000);
  }

  render() {
    return (
        <div className="optionsBox">
          <a className="button primary" href="/" onClick={(e) => this.handleResponseDisplay(e,"Functionality coming soon.")}><span className="plusSign" >+</span><span>Reserve</span></a>
          <a className="button secondary" href="/" onClick={(e) => this.handleResponseDisplay(e,"Functionality coming soon.")}><span>Review</span></a>
          <p className="responseBox">{this.state.showResponse ? this.state.response : ''}</p>
        </div>
    );
  }
}


export default OptionsBox;