import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { Link, useMatch } from "@reach/router"

import './index.styl'

const Footer = ({lang, navRoutes}) => {

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__nav-wrap">
          <nav className="footer__nav">
            {
              navRoutes.filter( route => route.slug !== 'index').map( route => (
                route.url ? (
                  <a 
                    key={route.slug}
                    href={ route.url }
                    target="blank"
                    className="footer__link footer__nav-link"
                  >
                    <div className="footer__link-label">{ route.label }</div>
                  </a>
                ) : (
                  <Link 
                    key={route.slug}
                    to={`/${lang}/${route.slug}`}
                    className="footer__link footer__nav-link"
                  >
                    <div className="footer__link-label">{ route.label }</div>
                  </Link>
                )
              ))
            }
          </nav>
          <div className="footer__social">
            <a className="footer__social-link footer__social-link-fb" href="https://www.facebook.com/">Facebook</a>
            <a className="footer__social-link footer__social-link-ig" href="https://instagram.com/">Instagram</a>
            <a className="footer__social-link footer__social-link-yt" href="https://www.youtube.com/">Youtube</a>
          </div>
        </div>
        <div className="footer__location">
          <p>
            Hwa Fong Rubber Ind. Co., Ltd. <br/>
            Address： No.300,Sec. 2, Chung-Shan Rd., Ta-Tsun Township, Chang-Hua County 515, Taiwan<br/>
            Tel： +886-4-8520121　Fax： +886-4-8525833 <br/>
            E-mail：<a className="footer__link" href="mailto:marketing@duro.com.tw<">marketing@duro.com.tw</a>
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        COPYRIGHT © {new Date().getFullYear()} HWA FONG RUBBER
      </div>
    </footer>
  )
}

Footer.propTypes = {
}

export default Footer
