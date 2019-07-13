import React, { useState, useEffect } from 'react';

function Post({ match }) {
  useEffect(() => {
    fetchPost();
  }, []);

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
    const post = await data.json();

    setPost(post);
  }

  return (
    <div className="container centered">
      <div className="col-xs-12">
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.body}</h6>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Post;