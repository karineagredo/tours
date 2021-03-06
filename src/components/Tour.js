import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='card'>
      <img src={image} className='card-image'></img>
      <footer className='card-info-container'>
        <div className='card-info'>
          <h3>{name}</h3>
          <p className='tour-price'>${price}</p>
        </div>
        <div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              onClick={() => setReadMore(!readMore)}
              className='read-more-btn'
            >
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
        </div>
        <button className='not-interested' onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

Tour.propTypes = {};

export default Tour;
