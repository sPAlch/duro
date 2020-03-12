import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link, useMatch } from "@reach/router"

import './index.styl'
import duroLogo from './duro_logo.svg'
import SiteSwitch from './site-switch'
import MenuDrawer from './menu-drawer'

const navRoutes = {
  en: [
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
  ],
  zh: [
    {
      slug: 'index',
      label: 'Home',
    },
    {
      slug: 'product',
      label: '輪胎商品',
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
      label: '關於華豐',
    },
    {
      slug: 'investigate',
      label: '投資人關係',
    },
  ]
}

const Header = ({lang}) => {
  const matchIndex = useMatch(`/${lang}`)
  const isPartiallyActive = ({ isPartiallyCurrent }) => ({
    className: `nav-link ${ isPartiallyCurrent ? 'nav-link--active' : '' }`
  })

  const activeRoutes = navRoutes[lang] || navRoutes['en']

  return (
    <header className="header">
      <Link className="index-link" to={`/${lang}`}>
        <img src={duroLogo} />
      </Link>
      <div className={classNames('nav-bar', {'nav-bar--transparent': matchIndex })}>
        <nav>
          {
            activeRoutes.filter( route => route.slug !== 'index').map( route => (
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
      <MenuDrawer navRoutes={activeRoutes} />
    </header>
  )
}

Header.propTypes = {
}

export default Header
