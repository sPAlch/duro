import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link, useLocation } from "@reach/router"

import Header from '../header'
import Footer from '../footer'
import BreadCrumbs from '../bread-crumbs'
import AsideMenu from '../aside-menu'

import { siteData } from '../../utils/site-data'

import './reset.css'
import './index.styl'

const Layout = props => {
  const {
    lang = 'en',
    children,
  } = props

  const location = useLocation()
  const paths = location.pathname.split('/').filter( d => d.length > 0)

  const routesMap = {}
  const asideData = {
    site: lang,
    menu: [],
  }

  const setRoutesMap = (routes, parent) => {
    routes.forEach( d => {
      const path = `${parent}${d.slug !== 'index' ? '/' + d.slug : '' }`
      if(d.slug) routesMap[path] = d.label
      if(d.subMenu){ setRoutesMap(d.subMenu, path) }
    })    
  }

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

  const activeRoute = navRoutes.filter( d => d.slug === paths[1])[0]

  asideData.cat = paths[1]
  asideData.menu = activeRoute ? activeRoute.subMenu : []

  setRoutesMap(navRoutes, lang)

  return (
    <>
      <Header lang={lang} navRoutes={navRoutes} />
      <BreadCrumbs lang={lang} routesMap={routesMap} paths={paths} />
      <main>
        <AsideMenu {...asideData} />
        <div className="content">
          {children}
        </div>
      </main>
      <Footer lang={lang} navRoutes={navRoutes} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
