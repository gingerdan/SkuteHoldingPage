import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayOpen: false,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({ overlayOpen: true })
  }

  handleClose() {
    this.setState({ overlayOpen: false })
  }

  render() {
    return (
      <div>
        {this.state.overlayOpen && (
          <div className="overlay">
            <img
              className="close-overlay"
              src={require('../images/CloseButton.svg')}
              onClick={this.handleClose}
            />
            <iframe
              className="iframe"
              src="https://player.vimeo.com/video/303678443?muted=1"
              frameborder="0"
              allowfullscreen
              autoplay="1"
            />
          </div>
        )}
        <div className="wrapper">
          <div className="hero">
            <img
              className="skute-logo"
              src={require('../images/Skute_logo_cross.svg')}
            />
            <button onClick={this.handleOpen} className="video-button">
              Watch video
            </button>
          </div>

          {/* <h1 className="tagline">
            CONNECT + DISCOVER
          </h1> */}
          <div className="app-store-buttons">
            <a
              className="app-store-button"
              href="https://itunes.apple.com/us/app/skute/id1438624407?ls=1&mt=8"
            >
              <img
                className="logo"
                src={require('../images/AppleStoreButton.svg')}
              />
            </a>
            <a
              className="app-store-button"
              href="https://play.google.com/store/apps/details?id=me.skute.skutestaging"
            >
              <img
                className="logo"
                src={require('../images/googlePlayButton.svg')}
              />
            </a>
          </div>
          <div classname="email-container">
            <a className="email-link" href="mailto:hi@skute.me">
              hi@skute.me
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
