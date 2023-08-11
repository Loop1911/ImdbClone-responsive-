import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Pagination = ({ total, limit, filterGenre }) => {
  const totalPages = Math.ceil(total / limit);

  // State for managing the page
  const [page, setPage] = useState(1);

  // Reset page to 1 whenever the filterGenre changes
  useEffect(() => {
    setPage(1);
  }, [filterGenre]);

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrevClick();
    } else if (event.key === "ArrowRight") {
      handleNextClick();
    }
  };

  return (
    <div className={styles.container} onKeyDown={handleKeyDown} tabIndex="1">
      {totalPages > 1 && (
        <>
          {page > 1 && (
            <button
              onClick={handlePrevClick}
              className={styles.arrow_btn}
              aria-label="Previous Page"
            >
              {"<"}
            </button>
          )}

          {page < totalPages && (
            <button
           
              className={
                page === totalPages
                  ? `${styles.page_btn} ${styles.active}`
                  : styles.page_btn
              }
              key={totalPages}
              disabled={page === totalPages - 1}
            >
              {page + 0}
            </button>
          )}
          {page < totalPages && (
            <button 
              onClick={handleNextClick}
              className={styles.arrow_btn}
              aria-label="Next Page"
            >
              {">"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
