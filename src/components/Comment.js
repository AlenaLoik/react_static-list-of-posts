import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment }) => (
  <div className="comment">
    <p>
      <b>name:</b>
      {' '}
      {comment.name}
    </p>
    <p>
      <b>email:</b>
      {' '}
      {comment.email}
    </p>
    <p className="commet__text">
      <b>comment:</b>
      {comment.body}
    </p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object).isRequired,
};
