const express=require("express");
const { getBlogs,postBlog } = require("../controllers/blogControllers");
const blogRouter=express.Router();

blogRouter.get('/blogs',getBlogs);
blogRouter.post('/blog',postBlog)

module.exports=blogRouter;