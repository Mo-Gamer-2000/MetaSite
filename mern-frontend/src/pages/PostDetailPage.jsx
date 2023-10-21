import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../api";

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    async function loadPost() {
      try {
        const postData = await fetchPostById(postId);
        setPost(postData);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    }
    loadPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.caption}</p>
      <p>{post.content}</p>
      <div>
        <h3>Comments:</h3>
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <strong>{comment.author.username}</strong>: {comment.text}
          </div>
        ))}
      </div>
      <div>
        <h3>Likes:</h3>
        {post.likes.map((like) => (
          <div key={like._id}>
            <strong>{like.user.username}</strong> gave a {like.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetailPage;
