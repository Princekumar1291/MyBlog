import React, { useContext, useRef } from 'react'
import BlogContext from '../store/BlogContext';

const CommentForm = ({ blog }) => {
  const comment = useRef(null);
  const username = useRef(null);
  const [posting, setPosting] = React.useState(false);
  const { updateBlog } = useContext(BlogContext);

  const handleAddComment = (e) => {
    e.preventDefault();
    setPosting(true);
    fetch(`http://localhost:3000/api/blog/${blog._id}/comment`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username.current.value, content: comment.current.value })
    })
      .then(res => res.json())
      .then((data) => {
        updateBlog(data.blog);
        username.current.value = '';
        comment.current.value = '';
      })
      .catch(err => console.log(err))
      .finally(() => setPosting(false));
  }

  return (
    <form action='' onSubmit={handleAddComment}>
      <input type="text" name="username" id="username" placeholder="Username" className="border border-gray-400 p-2 rounded" ref={username} />
      <input type="text" placeholder="Comment" className="border border-gray-400 p-2 rounded ml-2" ref={comment} />
      {posting ? <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Posting...</button> : <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Comment</button>}
    </form>
  )
}

export default CommentForm
