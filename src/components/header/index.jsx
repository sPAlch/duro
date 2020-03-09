import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from 'classnames'

import './index.styl'
import duroLogo from './duro_logo.svg'

const navRoutes = [
	{
		slug: 'product',
		label: 'Products',
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

  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
  	if (menuOpened) {
  		document.body.classList.add('menu-opened')
  	}else{
  		document.body.classList.remove('menu-opened')
  	}
  }, [menuOpened])

  return (
    <header className="header">
			<Link className="index-link" to="/">
	    	<img src={duroLogo} />
	    </Link>
	    <div className="nav-bar">
	    	<nav>
	    		{
	    			navRoutes.map( route => (
	    				<Link 
	    					key={route.slug}
	    					className="nav-link" 
	    					to={ route.url ? `${route.url}` : `${lang}/${route.slug}`}
	    				>
	    					{ route.label }
	    				</Link>
	    			))
	    		}
	    	</nav>
	    	<div className="lang-switch">
	    		<div>EN</div>
	    	</div>
	    </div>
    	<div className={classNames('menu', { 'menu--opened': menuOpened })}>
    		<div className="toogle-btn" onClick={ () => setMenuOpened(!menuOpened) }>
    			<div className={classNames('icon-bars', { 'icon-bars--crossed': menuOpened })}></div>
    		</div>
    		<div className="menu-list-wrap">
    			<div className="menu-list">
	    			<ul>
	    			</ul>
    			</div>
    		</div>
    	</div>
    </header>
  )
}

Header.propTypes = {
}

export default Header
