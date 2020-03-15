import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'

import './index.styl'

const IconLoader = ({className}) => (
  <div className={classNames('icon-loader', className)}>
    <xml version="1.0" encoding="utf-8" />
    <svg 
      className="icon-loader__svg"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid"
    >
      <circle 
        className="icon-loader__circle"
        cx="50" 
        cy="50" 
        fill="none" 
        r="32" 
        stroke-dasharray="150.79644737231007 52.26548245743669" 
      >
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          repeatCount="indefinite" 
          dur="1s" 
          values="0 50 50;360 50 50" 
          keyTimes="0;1">
        </animateTransform>
      </circle>
    </svg>
  </div>
)

IconLoader.propTypes = {
}

export default IconLoader
