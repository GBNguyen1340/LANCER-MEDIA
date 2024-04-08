"use client"
import React, { useState, useEffect } from 'react';
import BlogsTable from './blogTable'; 
import BlogsFilter from './blogFilter';
import Pagination from './pagination'; // Import Pagination component (optional)

const BlogsPerPage = 10; // Adjust as needed

const BlogsManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`/api/blogs?page=${currentPage}&per_page=${BlogsPerPage}${Object.entries(filter).length > 0 ? `&${new URLSearchParams(filter).toString()}` : ''}`);
      const data = await res.json();
      setBlogs(data);
      setTotalPages(Math.ceil(data.length / BlogsPerPage));
    };

    fetchBlogs();
  }, [currentPage, filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when applying filters
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <BlogsFilter onFilter={handleFilterChange} />
      <BlogsTable blogs={blogs.slice((currentPage - 1) * BlogsPerPage, currentPage * BlogsPerPage)} />
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />} {/* Render pagination if needed */}
      
    </div>
  );
};

export default BlogsManagement;