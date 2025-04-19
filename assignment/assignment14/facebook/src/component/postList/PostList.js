// src/components/PostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './../../store/slices/postSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
            <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Likes: {post.reactions.likes}</p>
          <p>DisLikes: {post.reactions.dislikes}</p>
          <p>Views: {post.views}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
