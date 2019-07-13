import React, { useState, useEffect } from 'react';

function Post({ match }) {

  const [bodyFontSize, setBodyFontSize] = useState();
  const [titleFontSize, setTitleFontSize] = useState();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

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
            <h5 className="card-title" style={{fontSize: titleFontSize + 'px'}}>{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: bodyFontSize + 'px'}}>{post.body}</h6>
          </div>
        </div>
        <hr />
        <h3>Title Font Size</h3>
        <input className="form-control-range" type="range"  min={12} max={32} value={titleFontSize} onChange={(e) => { setTitleFontSize(e.target.value); }} />
        <hr />
        <h3>Body Font Size</h3>
        <input className="form-control-range" type="range" min={12} max={32} value={bodyFontSize} onChange={(e) => { setBodyFontSize(e.target.value); }} />
      </div>
    </div>
  );
}

export default Post;