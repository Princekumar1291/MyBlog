import React, { useContext, useRef } from 'react'
import {useNavigate} from "react-router-dom"
import BlogContext from '../store/BlogContext';

const CreateBlog = () => {
  const {addBlog}=useContext(BlogContext);
  
  const title=useRef(null);
  const content=useRef(null);
  const author=useRef(null);
  const navigate=useNavigate();

  const handleCreateBlog=(e)=>{
    e.preventDefault();
    const blog={title:title.current.value,content:content.current.value,author:author.current.value};
    fetch("http://localhost:3000/api/blog",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    })
    .then(res=>res.json())
    .then((data)=>{
      const blog=data.blog;
      console.log(blog);
      addBlog(blog);
      title.current.value="";
      content.current.value="";
      author.current.value="";
      navigate('/');
    })
  }
  
  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Blog</h2>
      <form action="" method="post" className="space-y-4" onSubmit={handleCreateBlog}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter blog title"
            ref={title}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Write your blog content here"
            ref={content}
          ></textarea>
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Author name"
            ref={author}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Create Blog
        </button>
      </form>
    </div>
  )
}

export default CreateBlog
