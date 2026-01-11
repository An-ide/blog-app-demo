import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import './App.css';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="app">
          <nav className="nav">
            <h1 className="logo">My Blog</h1>
            <div className="navLinks">
              <Link to="/createblog" className="link">Create Blog</Link>
              <Link to="/blogs" className="link">All Blogs</Link>
            </div>
          </nav>

          <div className="content">
            <Routes>
              <Route path="/createblog" element={<CreateBlog />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/" element={<h2>Welcome to the Blog!</h2>} />
            </Routes>
          </div>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;