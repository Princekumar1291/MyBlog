import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import CreateBlog from '../components/CreateBlog'
import BlogProvider from '../store/BlogProvider'


const App = () => {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-blog' element={<CreateBlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BlogProvider>
  )
}

export default App
