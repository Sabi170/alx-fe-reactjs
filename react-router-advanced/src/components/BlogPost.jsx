// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extracts the dynamic segment from the URL

  return (
    <div>
      <h2>Blog Post #{id}</h2>
<p>This is the content for blog post with ID: <strong>{id}</strong>.</p>
      <p>In a real application, you would use this ID to fetch post data from an API.</p>
    </div>
  );
};

export default BlogPost;