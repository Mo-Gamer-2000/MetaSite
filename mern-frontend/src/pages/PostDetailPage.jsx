import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../api";
import { IoThumbsUp, IoThumbsDown } from "react-icons/io5";
import MainLayout from "../components/MainLayout";

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const [likes, setLikes] = useState(post ? post.likesCount : 0); // assuming your post object has a likesCount property
  const [dislikes, setDislikes] = useState(post ? post.dislikesCount : 0); // assuming your post object has a dislikesCount property
  const [userLiked, setUserLiked] = useState(false); // this should be fetched based on the logged in user
  const [userDisliked, setUserDisliked] = useState(false); // this should be fetched based on the logged in user

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

  const handleLike = async () => {
    if (userDisliked) {
      // Call your API to unlike and then:
      setDislikes(dislikes - 1);
      setUserDisliked(false);
    }
    if (!userLiked) {
      // Call your API to like and then:
      setLikes(likes + 1);
      setUserLiked(true);
    } else {
      // Call your API to remove like and then:
      setLikes(likes - 1);
      setUserLiked(false);
    }
  };

  const handleDislike = async () => {
    if (userLiked) {
      // Call your API to unlike and then:
      setLikes(likes - 1);
      setUserLiked(false);
    }
    if (!userDisliked) {
      // Call your API to dislike and then:
      setDislikes(dislikes + 1);
      setUserDisliked(true);
    } else {
      // Call your API to remove dislike and then:
      setDislikes(dislikes - 1);
      setUserDisliked(false);
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
                  </div>
                ))}

              <div className="mt-4">
                <textarea
                  placeholder="Add your comment..."
                  rows="3"
                  className="w-full p-3 rounded-lg text-black mb-3 shadow-inner"
                ></textarea>
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-md shadow-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PostDetailPage;
