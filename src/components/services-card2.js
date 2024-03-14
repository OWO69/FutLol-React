import React from 'react'

import PropTypes from 'prop-types'

import './services-card2.css'

const ServicesCard2 = (props) => {
  return (
    <div className="services-card2-services-card services-card">
      <div className="services-card2-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="services-card2-image"
        />
      </div>
      <span className="services-card2-text">{props.text}</span>
      <span className="services-card2-text1">{props.text1}</span>
    </div>
  )
}

ServicesCard2.defaultProps = {
  text: 'ERC404',
  imageSrc: '/Logos/file-document-200w.png',
  text1: 'Erc721 meets Erc 20 with our erc404',
  imageAlt: 'image',
}

ServicesCard2.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ServicesCard2
