import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link } from "@reach/router"

import './index.styl'

const AsideMenu = ({site, menu, cat}) => {
  console.log(site, menu, cat)
  const isActive = ({ href, location }) => {
    const isCurrent = href === location.pathname.replace(/\/$/, '')

    return({
      className: `aside__link ${ isCurrent ? 'aside__link--active' : '' }`
    })
  }

  return (
    <>
      {
        menu.length > 0 && (
          <aside className="aside">
            {
              menu.map(item => (
                <Link to={`${site}/${cat}/${item.slug}`} key={item.slug} getProps={isActive}>
                  {item.label}
                </Link>
              ))
            }
          </aside>
        )
      }
    </>
  )
}

AsideMenu.propTypes = {
}

export default AsideMenu
