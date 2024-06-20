import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  return (
    <div className="w-10">
      <div className="join">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <input
              key={page}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={page}
              checked={selectedPage === page}
              onChange={() => handlePageChange(page)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
