import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import MainNav from '../components/mainNav'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/438075c6-448e-4590-94d1-51c7fd3ca341.css"
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      {/* <MainNav /> */}
      {children()}
      
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
