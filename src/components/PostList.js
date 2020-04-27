import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <>
    <h1>Static list of posts</h1>
    {posts.map(post => (
      <article className="article" key={post.id}>
        <div className="article__main-info">
          <Post
            title={post.title}
            body={post.body}
            userInfo={post.user}
            comments={post.comments}
          />
        </div>
      </article>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
