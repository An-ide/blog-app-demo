import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import '../styles/BlogList.css';

const BlogList = () => {
  const { blogs } = useBlog();

  return (
    <div className="container">
      <h2>All Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blog posts yet. Create one!</p>
      ) : (
        <div className="blog-list">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">
                {blog.body.substring(0, 100)}...
              </p>
              <Link to={`/blogs/${blog.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;