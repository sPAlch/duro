import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"
import classNames from 'classnames'

import './index.styl'

const sitesData = {
  en: {
    slug: 'en',
    label: 'EN'
  },
  zh: {
    slug: 'zh',
    label: '繁'
  },
}
const sites = ['en', 'zh']

const SiteSwitch = ({site = 'en'}) => {
  return (
    <div className="site-switch">
      <div className="site-switch__toggle-btn">{sitesData[site].label}</div>
      <ul className="site-switch__menu">
        {
          sites.filter( d => d !== site ).map( d => (
            <li key={sitesData[d].slug} className="site-switch__menu-item">
              <Link to={sitesData[d].slug}>{sitesData[d].label}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

SiteSwitch.propTypes = {}

export default SiteSwitch
