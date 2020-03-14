import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link } from "@reach/router"

import './index.styl'

const BreadCrumbs = ({lang, routesMap, paths}) => {
  const crumbs = []
  const isActive = ({ href, location }) => {
    const isCurrent = href === location.pathname.replace(/\/$/, '')

    return({
      className: `bread-crumbs__link ${ isCurrent ? 'bread-crumbs__link--active' : '' }`
    })
  }

  paths.reduce( (prev, current) => {
    const path = prev ? `${prev}/${current}` : current
    crumbs.push({
      slug: path,
      label: routesMap[path],
    })
    return path
  }, '')

  return (
    <>
      {
        crumbs.length > 1 && (
          <div className="bread-crumbs">
            {
              crumbs.map( crumb => (
                <Link to={crumb.slug} key={crumb.slug} getProps={isActive}>
                  {crumb.label}
                </Link>
              ))
            }
          </div>
        )
      }
    </>
  )
}

BreadCrumbs.propTypes = {
}

export default BreadCrumbs
