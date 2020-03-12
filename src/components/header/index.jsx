import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link, useMatch } from "@reach/router"

import './index.styl'
import duroLogo from './duro_logo.svg'
import SiteSwitch from './site-switch'
import MenuDrawer from './menu-drawer'

const Header = ({lang, navRoutes}) => {
  const matchIndex = useMatch(`/${lang}`)
  const isPartiallyActive = ({ isPartiallyCurrent }) => ({
    className: `nav-link ${ isPartiallyCurrent ? 'nav-link--active' : '' }`
  })

  return (
    <header className="header">
      <Link className="index-link" to={`/${lang}`}>
        <img src={duroLogo} />
      </Link>
      <div className={classNames('nav-bar', {'nav-bar--transparent': matchIndex })}>
        <nav>
          {
            navRoutes.filter( route => route.slug !== 'index').map( route => (
              <Link 
                key={route.slug}
                getProps={isPartiallyActive}
                to={ route.url ? `${route.url}` : `/${lang}/${route.slug}`}
              >
                <div className="nav-link__label">{ route.label }</div>
              </Link>
            ))
          }
        </nav>
        <SiteSwitch site={lang} />
      </div>
      <MenuDrawer navRoutes={navRoutes} />
    </header>
  )
}

Header.propTypes = {
}

export default Header
