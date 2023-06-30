import React from "react";

function PostForm({ name, title, postText, handleInputChange, handleSubmit }) {
  return (
    <div>
      <label>Name:</label>
      <input
        placeholder="Enter your name..."
        value={name}
        onChange={(event) => handleInputChange("name", event.target.value)}
      />

      <label>Title:</label>
      <input
        placeholder="Enter post title..."
        value={title}
        onChange={(event) => handleInputChange("title", event.target.value)}
      />

      <label>Text:</label>
      <textarea
        placeholder="Enter post text..."
        value={postText}
        onChange={(event) => handleInputChange("postText", event.target.value)}
      />

      <button onClick={handleSubmit}>Submit Blog</button>
    </div>
  );
}

export default PostForm;
