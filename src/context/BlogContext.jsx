import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'My First Blog Post',
      body: 'This is the content of my first blog post. Welcome to my blog!'
    },
    {
      id: 2,
      title: 'Second post',
      body: 'This is my Second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'Content of the third post goes here.'
    },
  ]);

  const addBlog = (newBlog) => {
    const blogWithId = {
      ...newBlog,
      id: blogs.length + 1
    };
    setBlogs([...blogs, blogWithId]);
  };

  const getBlogById = (id) => {
    return blogs.find(blog => blog.id === parseInt(id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, getBlogById }}>
      {children}
    </BlogContext.Provider>
  );
};