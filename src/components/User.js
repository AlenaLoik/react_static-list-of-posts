import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name, email, address }) => (
  <section className="userInfo">
    <h3>about autor:</h3>
    <p><strong>{name}</strong></p>
    <b>email:</b>
    <p>{email}</p>
    <b>adress:</b>
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
