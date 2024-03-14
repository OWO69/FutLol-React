import React from 'react'

import PropTypes from 'prop-types'

import './services-card3.css'

const ServicesCard3 = (props) => {
  return (
    <div className="services-card3-services-card services-card">
      <div className="services-card3-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="services-card3-image"
        />
      </div>
      <span className="services-card3-text">{props.text}</span>
      <span className="services-card3-text1">{props.text1}</span>
    </div>
  )
}

ServicesCard3.defaultProps = {
  text: 'Random Rarity',
  imageSrc: '/Logos/dice-5-200h.png',
  imageAlt: 'image',
  text1: 'Pi Day mint gives random rarity cards\n',
}

ServicesCard3.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
}

export default ServicesCard3
