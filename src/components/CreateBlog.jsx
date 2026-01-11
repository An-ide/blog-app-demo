import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import '../styles/CreateBlog.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBlog = {
      title,
      body
    };
    
    addBlog(newBlog);
    navigate('/blogs');
  };

  return (
    <div className="container">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label htmlFor="title" className="label">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            placeholder="Enter blog title"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="body" className="label">Content:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="textarea"
            rows="10"
            placeholder="Write your blog content here..."
          />
        </div>

        <button type="submit" className="button">
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;