import React from "react";

const Pagination = ({ currentPage, totalPage = 10, onPageChange }) => {
  const generateNoPages = () => {
    const pages = [];
    // Issue 1: Loop starts from 0 and includes totalPage
    // Should start from 1 and go up to totalPage
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Issue 2: Missing prev/next functionality
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <button
        className={`mx-2 px-2 py-2 bg-cyan-800 text-gray-50 rounded-md ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        prev
      </button>

      {generateNoPages().map((pageNo) => (
        <button
          key={pageNo}
          className={`mx-2 px-2 py-2 ${
            currentPage === pageNo ? "bg-pink-600" : "bg-pink-400"
          } text-gray-50 rounded-md`}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}

      <button
        className={`mx-2 px-2 py-2 bg-red-800 text-gray-50 rounded-md ${
          currentPage === totalPage ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPage}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
