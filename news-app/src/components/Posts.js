import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json();

    setPosts(posts);
  }

  return (
    <div className="container">
      <div className="col-xs-12">
        {posts.map(post => (
          <div className="card m-3" key={post.id}>
            <div className="card-body">
              <h5 className="card-title"><Link to={`/posts/${post.id}`}>{post.title}</Link></h5>
              <h6 className="card-subtitle mb-2 text-muted post-body">{post.body}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;