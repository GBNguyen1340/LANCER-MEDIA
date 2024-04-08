const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const buttonClasses =
    "rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100 px-2 py-1";

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button className={`${buttonClasses} mr-2`} onClick={() => handlePageClick(currentPage - 1)}>
          Previous
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`${buttonClasses} ${page === currentPage ? 'bg-gray-100 text-blue-500' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button className={`${buttonClasses} ml-2`} onClick={() => handlePageClick(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;