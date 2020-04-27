import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name, email, address }) => (
  <section className="userInfo">
    <h3>about autor:</h3>
    <p><strong>{name}</strong></p>
    <h4>email:</h4>
    <p>{email}</p>
    <h4>adress:</h4>
    <p>
      {address.street}
      ,
      {' '}
      {' '}
      {address.suite}
      ,
      {' '}
      {address.city}
    </p>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.object).isRequired,
};
