import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from 'classnames'

import './index.styl'

const MenuDrawer = ({navRoutes, site='en'}) => {
  console.log(navRoutes)

  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add('menu-opened')
    }else{
      document.body.classList.remove('menu-opened')
    }
  }, [menuOpened])

  return (
    <div className={classNames('menu', { 'menu--opened': menuOpened })}>
      <div 
        className={classNames('menu__toogle-btn', { 'menu__toogle-btn--opened': menuOpened })} 
        onClick={ () => setMenuOpened(!menuOpened) }>
        <div className={classNames('icon-bars', { 'icon-bars--crossed': menuOpened })}></div>
      </div>
      <div className={classNames('menu__wrap', { 'menu__wrap--opened': menuOpened })}>
        <div className={classNames('menu__drawer', { 'menu__drawer--opened': menuOpened })}>
          <ul className="menu__list">
            {              
              navRoutes.map(({slug, url, label, subMenu = []}) => (
                <li key={slug} className="menu__list-item">
                  <a className="menu__nav-link" href={ url ? `${url}` : `/${site}/${slug === 'index' ? '' : slug}`}>
                    { label }
                  </a>                  
                  {
                    subMenu.map(subItem => (
                      <a 
                        className="menu__sub-nav-link"
                        key={`${slug}-${subItem.slug}`} 
                        href={ url ? `${url}` : `/${site}/${slug}/${subItem.slug}`}
                      >
                        { subItem.label }
                      </a>
                    ))
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

MenuDrawer.propTypes = {}

export default MenuDrawer
