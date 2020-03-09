import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from '../header'

import './reset.css'
import './index.styl'

const Layout = props => {
  const {
    lang = 'en',
    children,
  } = props

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

  console.log(site, lang)

  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <footer>
        COPYRIGHT © {new Date().getFullYear()}, cwiselab.gise.ntnu.edu.tw
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
