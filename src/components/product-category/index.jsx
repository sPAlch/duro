import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link } from "@reach/router"

import { IconLoader } from "../icons"
import { porductCategory } from "../../utils/site-data"

import './index.styl'

const ProductCategory = ({site, showTitle = true}) => {

  const [ activeCat, setActiveCat ] = useState(porductCategory[0])
  const [ coverLoaded, setCoverLoaded] = useState(false)

  const coverOnLoad = () => setCoverLoaded(true)
  const handleCatClick = cat => () => {
    setActiveCat(cat)
    setCoverLoaded(false)
  }

  return (
    <div className="product-category">
      { showTitle && <h2 className="product-category__title">category</h2> }
      <div className="product-category__content">
        <aside className="product-category__aside">
          <ul className="product-category__menu">
            {
              porductCategory.map( cat => (
                <li 
                  onClick={handleCatClick(cat)}
                  className={ classNames(
                    'product-category__menu-item', 
                    {'product-category__menu-item--active': cat.slug === activeCat.slug},
                  )}
                >
                  {cat.label}
                </li>
              ))
            }
          </ul>
        </aside>
        <div className="product-category__main">
          <div className="product-category__cover-types">
            <div className="product-category__cover">
              { !coverLoaded && <IconLoader className="product-category__cover-loading-icon" /> }
              <img 
                className={classNames('product-category__cover-img', {'product-category__cover-img--loading': !coverLoaded})}
                src={activeCat.cover} 
                onLoad={coverOnLoad} 
              />
            </div>
            <div className="product-category__types">
              { 
                activeCat.types.map( type => (
                  <div className="product-category__type-link" key={type.slug}>
                    { type.label }
                  </div>
                ))
              }
            </div>
          </div>
          <div className="product-category__introduction-links">
            <div className="product-category__introduction">
              <h3 className="product-category__sub-title">{activeCat.label}</h3>
              <p className="product-category__description">{activeCat.description}</p>
            </div>
            <div className="product-category__links">
              <Link className="product-category__cat-link" to={`${site}/product/${activeCat.slug}`}></Link>
              <a className="product-category__pdf-link" target="blank" href={activeCat.pdf}>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCategory.propTypes = {
}

export default ProductCategory
