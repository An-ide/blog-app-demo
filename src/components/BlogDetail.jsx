import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const { getBlogById } = useBlog();
  const navigate = useNavigate();
  
  const blog = getBlogById(id);

  if (!blog) {
    return (
      <div className="container">
        <h2>Blog Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/blogs')} 
          className="button"
        >
          Back to All Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button 
        onClick={() => navigate('/blogs')} 
        className="button"
      >
        ← Back to All Blogs
      </button>

      <article className="article">
        <h1 className="title">{blog.title}</h1>
        <div className="content">
          {blog.body.split('\n').map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="meta">
          <span>Post ID: {blog.id}</span>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;