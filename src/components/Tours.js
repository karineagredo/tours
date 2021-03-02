import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Tour from '../components/Tour';
import Loading from './Loading';
const url = 'http://localhost:3002/tours';

const Tours = (props) => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTours(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour}></Tour>
      ))}
    </>
  );
};

Tours.propTypes = {};

export default Tours;
