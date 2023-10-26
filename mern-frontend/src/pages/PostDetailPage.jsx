import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { fetchPostById } from "../api";
import { IoThumbsUp, IoThumbsDown } from "react-icons/io5";
import MainLayout from "../components/MainLayout";

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        console.log("Fetching post with ID:", postId);
        const postData = await fetchPostById(postId);
        console.log("Fetched post data:", postData);
        setPost(postData);
        setLikes(postData.likesCount);
        setDislikes(postData.dislikesCount);
      } catch (error) {
        console.error("Error loading post:", error);
        setError("Failed to load post details. Please try again later.");
      }
    }
    loadPost();
  }, [postId]);

  useEffect(() => {
    console.log("Post state changed:", post);
  }, [post]);

  useEffect(() => {
    console.log("Likes count changed:", likes);
  }, [likes]);

  useEffect(() => {
    console.log("Dislikes count changed:", dislikes);
  }, [dislikes]);

  useEffect(() => {
    console.log("New comment text:", newComment);
  }, [newComment]);

  const handleLike = async () => {
    console.log("Like button clicked!");
    try {
      const response = userLiked
        ? await api.delete(`/posts/${postId}/likes`)
        : await api.post(`/posts/${postId}/likes`, { type: "LIKE" });

      if (response.status === 200) {
        if (userDisliked) {
          setDislikes(dislikes - 1);
          setUserDisliked(false);
        }
        setUserLiked(!userLiked);
        setLikes(userLiked ? likes - 1 : likes + 1);
      } else {
        throw new Error("Failed to like the post.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to like the post. Please try again later.");
    }
  };

  const handleDislike = async () => {
    console.log("Dislike button clicked!");
    try {
      const response = userDisliked
        ? await api.delete(`/posts/${postId}/likes`)
        : await api.post(`/posts/${postId}/likes`, { type: "DISLIKE" });

      if (response.status === 200) {
        if (userLiked) {
          setLikes(likes - 1);
          setUserLiked(false);
        }
        setUserDisliked(!userDisliked);
        setDislikes(userDisliked ? dislikes - 1 : dislikes + 1);
      } else {
        throw new Error("Failed to dislike the post.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to dislike the post. Please try again later.");
    }
  };

  const handleCommentSubmit = async () => {
    console.log("Submitting comment:", newComment);
    try {
      const response = await api.post(`/posts/${postId}/comments`, {
        text: newComment,
        replyTo: replyToCommentId,
      });

      if (response.status === 200) {
        setNewComment("");
        setReplyToCommentId(null);
        // Ideally, re-fetch the post or append the comment to the post in the state
      } else {
        throw new Error(
          response.data.message || "Failed to submit the comment."
        );
      }
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("Failed to submit the comment. Please try again later.");
    }
  };

  if (!post)
    return <div className="text-center text-black py-10">Loading...</div>;

  return (
    <MainLayout>
      <div className="pt-20 md:pt-24 lg:pt-28 pb-16 px-4 md:px-10 lg:px-16">
        <section className="container mx-auto flex flex-col mt-6 mb-16 max-w-5xl">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => window.history.back()}
              className="text-indigo-600 font-bold flex items-center text-xl"
            >
              <ion-icon name="arrow-back-outline" className="mr-2"></ion-icon>
              Back
            </button>
          </div>

          <div className="bg-white shadow-2xl mt-10 p-6 rounded-lg transform transition-transform hover:scale-105">
            <h1 className="text-3xl font-bold text-black mb-4">{post.title}</h1>
            <img
              className="w-full h-80 object-cover rounded mb-4"
              src={post.image}
              alt={post.title}
            />
            <h2 className="text-xl font-semibold text-indigo-600 mb-3">
              {post.caption}
            </h2>
            <p className="text-base text-black mb-6">{post.content}</p>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <button
                  className={`flex items-center space-x-2 ${
                    userLiked
                      ? "text-indigo-800"
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                  onClick={() => handleLike()}
                >
                  <IoThumbsUp className="w-5 h-5" />
                  <span>{likes}</span>
                </button>
                <button
                  className={`flex items-center space-x-2 ${
                    userDisliked
                      ? "text-indigo-800"
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                  onClick={() => handleDislike()}
                >
                  <IoThumbsDown className="w-5 h-5" />
                  <span>{dislikes}</span>
                </button>
              </div>
              <div className="font-medium text-indigo-600">
                Author: {post.author.username}
              </div>
            </div>

            <div className="mt-6 border-t border-indigo-600 pt-4">
              <h3 className="text-xl font-semibold text-black mb-3">
                Comments:
              </h3>
              {post.comments &&
                post.comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="mb-4 p-3 bg-indigo-600 bg-opacity-10 rounded-md shadow-md transform transition-transform hover:scale-105"
                  >
                    <strong className="text-indigo-600">
                      {comment.author.username}
                    </strong>
                    :<p className="text-black ml-2">{comment.text}</p>
                    {comment.repliedTo && (
                      <div className="ml-6 mt-2 bg-gray-100 p-2 rounded">
                        <strong className="text-indigo-500">
                          Replied to {comment.repliedTo.author.username}
                        </strong>
                        :
                        <p className="text-black ml-2">
                          {comment.repliedTo.text}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => setReplyToCommentId(comment._id)}
                      className="text-indigo-600 ml-2 mt-2 hover:underline"
                    >
                      Reply
                    </button>
                  </div>
                ))}

              <div className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={
                    replyToCommentId
                      ? "Reply to the comment..."
                      : "Add your comment..."
                  }
                  rows="3"
                  className="w-full p-3 rounded-lg text-black mb-3 shadow-inner"
                ></textarea>
                <button
                  onClick={handleCommentSubmit}
                  className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-md shadow-md"
                >
                  Send
                </button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PostDetailPage;
