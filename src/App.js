import React from 'react';

import './App.css';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preperedPosts = posts.map(post => (
  {
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => (
      user.id === post.userId
    )),
  }
));

const App = () => (
  <div className="App">
    <PostList posts={preperedPosts} />
  </div>
);

export default App;
