import React from 'react';
import './CommentList.css';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <section className="comments">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
