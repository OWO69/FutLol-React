import React from 'react'

import PropTypes from 'prop-types'

import './services-card4.css'

const ServicesCard4 = (props) => {
  return (
    <div className="services-card4-services-card services-card">
      <div className="services-card4-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="services-card4-image"
        />
      </div>
      <span className="services-card4-text">{props.text}</span>
      <span className="services-card4-text1">{props.text1}</span>
    </div>
  )
}

ServicesCard4.defaultProps = {
  text1:
    'Ownership of in game assets and ability to suggest new characters on telegram',
  imageSrc: '/Logos/eye-200h.png',
  text: 'In game rights',
  imageAlt: 'image',
}

ServicesCard4.propTypes = {
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ServicesCard4
