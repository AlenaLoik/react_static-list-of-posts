import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { CommentList } from './CommentList';
import { User } from './User';

export const PostList = ({ preperedPosts }) => (
  <>
    <h1>Static list of posts</h1>
    {preperedPosts.map(post => (
      <article className="article" key={post.id}>
        <div className="article__main-info">
          <Post title={post.title} body={post.body} />
          <User userInfo={post.user} />
        </div>
        <div className="article__comments">
          <CommentList comments={post.comments} />
        </div>
      </article>
    ))}
  </>
);

PostList.propTypes = {
  preperedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
