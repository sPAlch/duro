import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link, useLocation } from "@reach/router"

import './index.styl'

const BreadCrumbs = ({lang, navRoutes}) => {
  const location = useLocation()
  const paths = location.pathname.split('/')
  const crumbs = []
  const routesMap = {}

  const setMap = (routes, parent) => {
    routes.forEach( d => {
      const path = `${parent}${d.slug !== 'index' ? '/' + d.slug : '' }`
      if(d.slug) routesMap[path] = d.label
      if(d.subMenu){ setMap(d.subMenu, path) }
    })    
  }

  setMap(navRoutes, lang)
  console.log(paths, location.pathname, routesMap)

  return (
    <div className="bread-crumbs">
    </div>
  )
}

BreadCrumbs.propTypes = {
}

export default BreadCrumbs
