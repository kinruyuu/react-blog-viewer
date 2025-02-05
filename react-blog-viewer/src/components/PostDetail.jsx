import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    // Fetch post details
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoadingPost(false);
      })
      .catch((err) => {
        console.error('Error fetching post:', err);
        setLoadingPost(false);
      });

    // Fetch comments for the post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoadingComments(false);
      })
      .catch((err) => {
        console.error('Error fetching comments:', err);
        setLoadingComments(false);
      });
  }, [id]);

  if (loadingPost) {
    return <p>Loading post...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <h2>Comments</h2>
      {loadingComments ? (
        <p>Loading comments...</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>
                <strong>{comment.name}</strong> ({comment.email})
              </p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Posts</Link>
    </div>
  );
}

export default PostDetail;
