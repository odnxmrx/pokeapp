//import React from "react";
import style from "./PaginationBtn.module.css";

// eslint-disable-next-line react/prop-types
const PaginationBtn = ({ currentPage, cardsPerPage, setCurrentPage, currentItemsToDisplay }) => {

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.navigateContainer}>
      <span>Page {currentPage}</span>
      {
        currentPage > 1 &&
        <button
          onClick={() => paginate(currentPage - 1)}
          className={style.navBtn}
        >
          ← Page {currentPage - 1}
        </button>
      }
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentItemsToDisplay < cardsPerPage}
        className={style.navBtn}
      >
        Page {currentPage + 1} →
      </button>
    </div>
  )

}

export default PaginationBtn;