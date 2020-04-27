import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <h4>name: </h4>
    <p>{name}</p>
    <h4> email: </h4>
    <p>{email}</p>
    <p className="commet__text">
      <h4> comment: </h4>
      <p>{body}</p>
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
