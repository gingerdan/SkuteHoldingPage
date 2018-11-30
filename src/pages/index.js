import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayOpen: false,
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ overlayOpen: true });
  }

  handleClose() {
    this.setState({ overlayOpen: false });
  }

  render() {
    return (
      <div>
        {this.state.overlayOpen && (
          <div className="overlay">
            <div className="close-overlay" onClick={this.handleClose} />
          </div>
        )}
        <div className="Hero">
          <div className="HeroGroup">
            <img
              className="skute-logo"
              src={require('../images/Skute_logo_cross.svg')}
            />
            <button onClick={this.handleOpen} className="black-button">Watch video</button>
            <h1>The worlds first physical to digital fan network</h1>
            <div className="AppStoreButtons">
              <a href="https://itunes.apple.com/us/app/skute/id1438624407?ls=1&mt=8">
                <img src={require('../images/AppleStoreButton.svg')} />
              </a>
              <a href="/">
                <img src={require('../images/googlePlayButton.svg')} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
