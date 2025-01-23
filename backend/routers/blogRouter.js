const express=require("express");
const blogControllers = require("../controllers/blogControllers");
const blogRouter=express.Router();

blogRouter.get('/blogs',blogControllers.getBlogs);
blogRouter.post('/blog',blogControllers.postBlog);
blogRouter.delete('/blog/:id',blogControllers.delteBlog);
blogRouter.put('/blog/:id/like',blogControllers.likeBlog);
blogRouter.put('/blog/:id/comment',blogControllers.postComment)

module.exports=blogRouter;