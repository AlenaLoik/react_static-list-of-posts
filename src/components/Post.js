import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export const Post = ({ title, body }) => (
  <div className="article__content">
    <h2 className="article__title">{title}</h2>
    <p className="article__text">{body}</p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
