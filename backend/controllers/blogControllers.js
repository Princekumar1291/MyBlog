const Blog = require("../models/Blog")

const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      message: "Success",
      blogs
    })
  } catch (error) {
    console.log(error)
  }
}

const postBlog = async (req, res, next) => {
  const { title, content, author } = req.body;
  try {
    const blog = new Blog({ title, content, author });
    await blog.save();
    res.status(200).json({
      message: "Success",
      blog: blog
    })
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      error
    })
  }
}

const delteBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      message: "Success",
      blog
    })
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      error
    })
  }
}

const likeBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(400).json({
        message: "Failed",
        error: "Blog not found"
      })
    }
    blog.likes = blog.likes + 1;
    await blog.save();
    res.status(200).json({
      message: "Success",
      blog
    })
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      error
    })
  }
}
  
const postComment=async (req,res,next)=>{
  const id=req.params.id;
  const {username,content}=req.body;
  if(!username || !content){
    res.status(400).json({
      status:"username or content does not exit"
    })
  }
  try {
    const blog=await Blog.findById(id);
    if(!blog){
      return res.status(400).json({
        status:"blog not found"
      })
    }
    blog.comments.push({username,content})
    await blog.save();
    res.status(200).json({
      status:"success",
      blog
    })
  } catch (error) {
    res.status(400).json({
      status:"error while saving the post",
      error
    })
  }
}

module.exports = {
  getBlogs,
  postBlog,
  delteBlog,
  likeBlog,
  postComment
}