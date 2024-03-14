import React from 'react'

import PropTypes from 'prop-types'

import './services-card1.css'

const ServicesCard1 = (props) => {
  return (
    <div className="services-card1-services-card services-card">
      <div className="services-card1-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="services-card1-image"
        />
      </div>
      <span className="services-card1-text">{props.text}</span>
      <span className="services-card1-text1">
        <span>Futsal meets LoL</span>
        <br></br>
        <span>5 a side </span>
        <br></br>
        <span>
          Impossible field meets Good vs Evil in this epic 5 a side showdown
          with tower defense game meets ball kicking goalfest
        </span>
        <br></br>
      </span>
    </div>
  )
}

ServicesCard1.defaultProps = {
  imageAlt: 'image',
  text: 'FUTLOL',
  imageSrc: '/Logos/website-200h.png',
}

ServicesCard1.propTypes = {
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ServicesCard1
