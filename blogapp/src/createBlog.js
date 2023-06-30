import React, { useState } from "react";
import PostForm from "./postForm";
import PostList from "./postList";
import "./App.css";


function CreateBlog() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");


  //updates states
  const handleInputChange = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "postText":
        setPostText(value);
        break;
      default:
        break;
    }
  };
  //called when submit
  const handleCreatePost = () => {
    const newPost = {
      name,
      title,
      postText
    };

    setPosts([...posts, newPost]);
    setName("");
    setTitle("");
    setPostText("");
  };

  return (
  <div className="createBlogPage">
    <h1 className="text-red-500">Create a Post</h1>
    <div className="cbContainer"></div>
    <PostForm
      name={name}
      title={title}
      postText={postText}
      handleInputChange={handleInputChange}
      handleSubmit={handleCreatePost}
    />
    <PostList posts={posts} />
  </div>


  );
  
}

export default CreateBlog;
