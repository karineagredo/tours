import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Tour from '../components/Tour';
import Loading from './Loading';
const url = 'http://localhost:3002/tours';

const Tours = (props) => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const removeTour = (id) => setTours(tours.filter((tour) => tour.id !== id));
  const getTours = () => {
    axios
      .get(url)
      .then((res) => {
        setTours(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className='container'>
        <h3 className='title'>No tours left</h3>
        <button className='btn' onClick={getTours}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
      ))}
    </>
  );
};

export default Tours;
