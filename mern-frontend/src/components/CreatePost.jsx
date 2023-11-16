import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function CreatePost() {
  const { user, logout } = useContext(AuthContext); // Use context here
  console.log("Current User:", user);

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked with user:", user);

    if (!user) {
      alert("User is not authenticated.");
      navigate("/login");
      return;
    }

    if (!title || !caption || !content || !image) {
      alert("All fields are required.");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const data = {
      title,
      caption,
      image,
      content,
    };

    console.log("Headers for the API Call:", config.headers);
    console.log("Data for the API Call:", data);
    console.log("Token used for this request:", localStorage.getItem("token"));

    try {
      const response = await axiosInstance.post("/posts", data, config);
      if (response && response.data && response.status === 200) {
        alert("Post created successfully!");
        navigate("/dashboard");
      } else {
        alert("There was a problem creating your post.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          // Log the user out if the token is invalid or expired
          logout();
          navigate("/login");
          alert("Your session has expired. Please log in again.");
          return;
        }

        console.error("Error response from server:", error.response.data);
        console.error("Error from server:", error.response.data.error);
      }

      console.error("Error creating post:", error);
      alert(error.message || "An error occurred while creating the post.");
    }
  };

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!user) return;

      try {
        const response = await axiosInstance.get(`/posts?author=${user._id}`); // Use context user
        setUserPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch user posts:", error);
      }
    };

    fetchUserPosts();
  }, [user]); // Add user to dependency list

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <Link
        to="/dashboard"
        className="absolute top-4 left-4 text-indigo-600 hover:text-indigo-700"
      >
        <ion-icon name="arrow-back-outline" class="text-2xl"></ion-icon>
      </Link>
      <h2 className="text-2xl text-indigo-600 mb-4 pt-6">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-indigo-500 focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Caption:</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-indigo-500 focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">
            Image URL:
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-indigo-500 focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-indigo-500 focus:ring"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Your Posts:</h3>
        {userPosts.map((post) => (
          <div
            key={post._id}
            className="mb-4 bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-32 object-cover rounded-t"
            />
            <h4 className="text-lg font-medium mt-4">{post.title}</h4>
            <p className="text-gray-700 mt-2">{post.caption}</p>
            {/* Add Edit/Delete buttons here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatePost;
