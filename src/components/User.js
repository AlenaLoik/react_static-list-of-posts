import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ userInfo }) => (
  <section className="userInfo">
    <h3>about autor:</h3>
    <p><strong>{userInfo.name}</strong></p>
    <b>email:</b>
    <p>{userInfo.email}</p>
    <b>adress:</b>
    <p>
      {userInfo.address.street}
      ,
      {' '}
      {' '}
      {userInfo.address.suite}
      ,
      {' '}
      {userInfo.address.city}
    </p>
  </section>
);

User.propTypes = {
  userInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
