import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../redux/actions/movieActions";

export default function Pagination() {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();

  const pages = useSelector((state)=> state.pageCount)
  useEffect(() => {
    setPageCount(pages);
  }, [pages]);

  // Get Current Page
  const getPage = (page) => {
    dispatch(getPages(page));
  };

  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="previous"
      containerClassName={"pagination justify-content-center p-3"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      pageClassName={"page-item"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      pageLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}
