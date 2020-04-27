import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';
import './Post.css';

export const Post = ({ title, body, userInfo, comments }) => (
  <>
    <div className="article__content">
      <h2 className="article__title">{title}</h2>
      <p className="article__text">{body}</p>
      <User {...userInfo} />
    </div>
    <div className="article__comments">
      <CommentList comments={comments} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userInfo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
