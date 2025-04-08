"use client"
import PaginationRounded from '@/app/components/Pagination';
import PostCard from '@/app/components/PostCard';
import React, { useEffect, useState } from 'react';



function FetchPost() {
  const limit = 10;
  const [post, setpost] = useState([]);
  const [totalPages, settotalPages] = useState();
  const [page, setpage] = useState(1);
  // const totalPages = post.length / limit;
  // const [totalPages, settotalPage] = useState();

  const handlePageChange = (event, value) => {
    setpage(value)
  }
  const total = Math.round(totalPages/limit);
  useEffect(() => {
    fetchPost(page)
  }, [page]);

  const fetchPost = async (page) => {
    const skip = (page - 1) * limit;
    
    try {
      const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setpost(data.posts);
      settotalPages(data.total);
       
      // settotalPage(Math.ceil(data.total));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-4 gap-4">
        {Array.isArray(post) && post.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-6 mb-6">
        <PaginationRounded
          page={page}
          totalPages={total}
          onChange={handlePageChange} />
      </div>
    </div>
  )
}

export default FetchPost
