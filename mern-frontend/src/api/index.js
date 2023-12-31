import axiosInstance from "../axiosInstance";

const api = axiosInstance;

// Fetch all posts
export const fetchAllPosts = async () => {
  try {
    let response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};

// Create a new post
export const createNewPost = async (postData) => {
  try {
    const response = await api.post("/posts", postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Like or Dislike a post
export const togglePostLike = async (postId, likeType) => {
  try {
    const response = await api.post(`/posts/${postId}/likes`, {
      type: likeType,
    });
    return response.data;
  } catch (error) {
    console.error("Error liking/disliking post:", error);
    throw error;
  }
};

// Add a comment to a post
export const addCommentToPost = async (postId, commentData) => {
  try {
    const response = await api.post(`/posts/${postId}/comments`, commentData);
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

// Fetch a specific post by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
};

export default api;
