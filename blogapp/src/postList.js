import React, { useState } from "react";
import Counter from "./counter";

function Comment({ comment }) {
    const [replyName, setReplyName] = useState("");
    const [replyText, setReplyText] = useState("");
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replies, setReplies] = useState([]);
  
    const handleReply = () => {
      setShowReplyForm(true);
    };
  
    const handleSaveReply = () => {
      const newReply = { name: replyName, text: replyText };
      const updatedReplies = [...replies, newReply];
      setReplies(updatedReplies);
      setReplyName("");
      setReplyText("");
      setShowReplyForm(false);
    };
  
    return (
      <div className="comment">
        <p>
          <strong>{comment.name}:</strong> {comment.text}
        </p>
        <button onClick={handleReply}>Reply</button>
        {showReplyForm && (
          <div className="replyForm">
            <input
              type="text"
              value={replyName}
              onChange={(e) => setReplyName(e.target.value)}
              placeholder="Your Name"
            />
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Your Reply"
            ></textarea>
            <button onClick={handleSaveReply}>Save Reply</button>
          </div>
        )}
        {replies.map((reply, index) => (
          <div style={{ marginLeft: '30px' }}>
            <Comment comment={reply} key={index} />
          </div>
        ))}
      </div>
    );
  }
  
  

  function PostList({ posts }) {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editTitle, setEditTitle] = useState("");
    const [editPostText, setEditPostText] = useState("");
    const [comments, setComments] = useState([]);
  
    const handleEdit = (index) => {
      setEditingIndex(index);
      setEditTitle(posts[index].title);
      setEditPostText(posts[index].postText);
    };
  
    const handleSave = (index) => {
      const updatedPosts = [...posts];
      updatedPosts[index].title = editTitle;
      updatedPosts[index].postText = editPostText;
      setEditingIndex(-1);
      setEditTitle("");
      setEditPostText("");
    };
  
    const handleCancel = () => {
      setEditingIndex(-1);
      setEditTitle("");
      setEditPostText("");
    };
    
    //update with users inputs
    const handleTitleChange = (event) => {
      setEditTitle(event.target.value);
    };
  
    const handlePostTextChange = (event) => {
      setEditPostText(event.target.value);
    };
  
    const handleComment = (index) => {
      const name = prompt("Enter your name:");
      const text = prompt("Enter your comment:");
  
      if (name && text) {
        const newComment = { name, text };
        const updatedComments = [...comments];
        updatedComments[index] = updatedComments[index] || [];
        updatedComments[index].push(newComment);
        setComments(updatedComments);
      }
    };
  
    return (
      <div className="postList">
        <h2>Posts:</h2>
        {posts.map((post, index) => (
          <div className="postItem" key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={handleTitleChange}
                />
                <textarea
                  value={editPostText}
                  onChange={handlePostTextChange}
                ></textarea>
                <button onClick={() => handleSave(index)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <>
                <h3>{post.title}</h3>
                <p>
                  <strong>Author:</strong> {post.name}
                </p>
                <p>{post.postText}</p>
                <div>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleComment(index)}>Comment</button>
                </div>
                <Counter />
                {comments[index] && (
                  <div className="comments">
                    <h4>Comments:</h4>
                    {comments[index].map((comment, commentIndex) => (
                      <Comment comment={comment} key={commentIndex} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default PostList;
  