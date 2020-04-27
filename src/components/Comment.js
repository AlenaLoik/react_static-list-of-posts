import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p>
      <b>name:</b>
      {' '}
      {name}
    </p>
    <p>
      <b>email:</b>
      {' '}
      {email}
    </p>
    <p className="commet__text">
      <b>comment:</b>
      {body}
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
