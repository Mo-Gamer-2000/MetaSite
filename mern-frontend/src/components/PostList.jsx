import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsData = await fetchAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    }

    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          {/* Render other post data as needed */}
        </div>
      ))}
    </div>
  );
}

export default PostList;
