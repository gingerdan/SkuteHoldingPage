import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <img width="500" src={require('../images/Skute_logo_cross.svg')}></img>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Watch video</Link>
      </div>
    </div>
    
  </div>
)

export default IndexPage
