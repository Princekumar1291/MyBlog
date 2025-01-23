const Blog = require("../models/Blog")

const getBlogs=async (req,res,next)=>{
  try {
    const blogs=await Blog.find();
    res.status(200).json({
      message:"Success",
      blogs
    })
  } catch (error) {
    console.log(error)
  }
}

const postBlog=(req,res,next)=>{
  const {title,content,author}=req.body;
  console.log(title,content,author)
  try {
    const blog=new Blog({title,content,author});
    blog.save();
    res.status(200).json({
      message:"Success",
      blog:blog
    })
  } catch (error) {
    res.status(400).json({
      message:"Failed",
      error
    })
  }
}

module.exports={
  getBlogs,
  postBlog
}