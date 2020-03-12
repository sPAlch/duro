import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from '../header'
import Footer from '../footer'

import { siteData } from '../site-data'

import './reset.css'
import './index.styl'

const Layout = props => {
  const {
    lang = 'en',
    children,
  } = props

  const navRoutes = siteData[lang] || siteData['en']
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            routes {
              slug
              routes {
                link
                slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Header lang={lang} navRoutes={navRoutes} />
      <main>{children}</main>
      <Footer lang={lang} navRoutes={navRoutes} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
