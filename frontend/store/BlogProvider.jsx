import React, { useReducer} from 'react'
import BlogContext from './BlogContext'

const blogReducer = (state, action) => {
  if (action.type === 'ADD_BLOG') {
    return [...state, action.payload.blog]
  }
  if (action.type === 'SET_BLOGS') {
    return action.payload.blogs
  }
  if (action.type === 'DELETE_BLOG') {
    return state.filter((blog) => blog._id !== action.payload.id)
  }
  if (action.type === 'UPDATE_BLOG') {
    return state.map((blog) => blog._id === action.payload.blog._id ? action.payload.blog : blog)
  }
  return state
}

const BlogProvider = ({children}) => {
  const [blogs, dispatch] = useReducer(blogReducer, []);

  const addBlog = (blog) => {
    dispatch({
      type: 'ADD_BLOG',
      payload: {
        blog
      }
    })
  }
  
  const setBlogs = (blogs) => {
    dispatch({
      type: 'SET_BLOGS',
      payload: {
        blogs
      }
    })
  }

  const deleteBlog = (id) => {
    dispatch({
      type: 'DELETE_BLOG',
      payload: {
        id
      }
    })
  }

  const updateBlog = (blog) => {
    dispatch({
      type: 'UPDATE_BLOG',
      payload: {
        blog
      }
    })
  }



  const value = {blogs,addBlog,setBlogs,deleteBlog,updateBlog};
  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
