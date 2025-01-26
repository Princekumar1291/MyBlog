import React, { useContext } from 'react';
import CommentForm from './CommentForm';
import formateDate from '../utils/dateUtils';
import BlogContext from '../store/BlogContext';

const Blog = ({ blog }) => {
  const { updateBlog, deleteBlog } = useContext(BlogContext);

  const handleLike = () => {
    fetch(`http://localhost:3000/api/blog/${blog._id}/like`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        updateBlog(data.blog);
      })
  }

  const handleDeleteBlog = () => {
    fetch(`http://localhost:3000/api/blog/${blog._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        deleteBlog(blog._id);
      })
  }



  return (
    <article className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
        <p className="mt-2 text-sm text-gray-600">By {blog.author}</p>
      </header>
      <section className="text-lg text-gray-800 leading-relaxed">
        <p>{blog.content}</p>
        <p>Likes: {blog.likes}💖</p>
      </section>
      {/* show comments */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-gray-900">Comments</h2>
        {blog.comments.map((comment, index) => (
          <div key={index} className="mt-2">
            <p className="text-gray-800">{comment.username}: {comment.content}</p>
            <p className="text-sm text-gray-600">{formateDate(comment.createdAt)}</p>
          </div>
        ))}
      </section>

      <section className="flex mb-4 mt-6 space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLike}>Like</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDeleteBlog}>Delete</button>
      </section>
      <section>
        <CommentForm blog={blog} />
      </section>
    </article>

  );
};

export default Blog;

