import React, { Component } from "react";
import logo from "./logo.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayOpen: false,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  handleResize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }
  handleOpen() {
    this.setState({ overlayOpen: true });
  }

  handleClose() {
    this.setState({ overlayOpen: false });
  }

  render() {
    const isDesktop = this.state.windowWidth > 549;
    return (
      <div>
        {this.state.overlayOpen && (
          <div className="overlay" style={{ height: this.state.windowHeight }}>
            <img
              className="close-overlay"
              src={require("./images/CloseButton.svg")}
              onClick={this.handleClose}
            />
            <div className="vid-container">
              {isDesktop ? (
                <video
                  className="video-desktop"
                  style={{
                    width: this.state.windowWidth,
                    height: (this.state.windowWidth * 9) / 16
                  }}
                  controls
                  autoPlay
                  muted
                  loop
                  src="https://s3-eu-west-1.amazonaws.com/skute-holdingpage/media/Skute_landscape.mp4"
                />
              ) : (
                <video
                  className="video-mobile"
                  style={{
                    width: (this.state.windowHeight * 9) / 16,
                    height: this.state.windowHeight
                  }}
                  controls
                  autoPlay
                  muted
                  loop
                  src="https://s3-eu-west-1.amazonaws.com/skute-holdingpage/media/Skute_Portrait.mp4"
                />
              )}
            </div>
          </div>
        )}
        <div className="wrapper" style={{ height: this.state.windowHeight }}>
          <div className="slide1" />
          <div className="slide2" />
          <div className="slide3" />
          <div className="slide4" />

          <div className="hero">
            <img
              className="skute-logo"
              src={require("./images/Skute_logo_cross.svg")}
            />
            <button onClick={this.handleOpen} className="video-button">
              Watch video
            </button>
            {/*<h1 className="tagline">CONNECT + DISCOVER</h1>*/}
            <h1 className="tagline">
              The worlds first physical to digital fan network
            </h1>
          </div>

          <div className="app-store-buttons">
            <a
              className="app-store-button"
              href="https://itunes.apple.com/us/app/skute/id1438624407?ls=1&mt=8"
            >
              <img
                className="logo"
                src={require("./images/AppleStoreButton.svg")}
              />
            </a>
            <a
              className="app-store-button"
              href="https://play.google.com/store/apps/details?id=me.skute.skutestaging"
            >
              <img
                className="logo"
                src={require("./images/googlePlayButton.svg")}
              />
            </a>
          </div>
          <div className="email-container">
            <a className="email-link" href="mailto:hi@skute.me">
              hi@skute.me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
