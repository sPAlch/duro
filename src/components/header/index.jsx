import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from 'classnames'

import './index.styl'
import duroLogo from './duro_logo.svg'
import SiteSwitch from './site-switch'
import MenuDrawer from './menu-drawer'

const navRoutes = [
  {
    slug: 'index',
    label: 'Home',
  },
  {
    slug: 'product',
    label: 'Products',
    subMenu: [
      {
        slug: 'automotive',
        label: 'Automotive',
      },
      {
        slug: 'bicycle',
        label: 'Bicycle',
      },
      {
        slug: 'motorcycle',
        label: 'Motorcycle',
      },
      {
        slug: 'atv',
        label: 'ATV',
      },
      {
        slug: 'industrial',
        label: 'Industrial',
      },
    ]
  },
  {
    slug: 'about',
    label: 'About Us',
  },
  {
    slug: '',
    label: 'Online Shop',
    url: '#'
  },
]

const Header = ({lang}) => {
  return (
    <header className="header">
      <Link className="index-link" to="/">
        <img src={duroLogo} />
      </Link>
      <div className="nav-bar">
        <nav>
          {
            navRoutes.filter( route => route.slug !== 'index').map( route => (
              <a 
                key={route.slug}
                className="nav-link" 
                href={ route.url ? `${route.url}` : `../${lang}/${route.slug}`}
              >
                { route.label }
              </a>
            ))
          }
        </nav>
        <SiteSwitch />
      </div>
      <MenuDrawer navRoutes={navRoutes} />
    </header>
  )
}

Header.propTypes = {
}

export default Header
