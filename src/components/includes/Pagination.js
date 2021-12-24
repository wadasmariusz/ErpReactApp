import React from 'react';
import {Pagination as PaginationBootstrap, PaginationItem as PaginationItemBootstrap, PaginationLink} from "reactstrap";
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";

const PaginationItem = ({ onClick, currentPage, url, pageNo, children, canBeCurrent }) => (
  <PaginationItemBootstrap active={canBeCurrent && currentPage === pageNo}>
    <PaginationLink href={url} onClick={onClick}>
      {children || pageNo}
    </PaginationLink>
  </PaginationItemBootstrap>
)


export const Pagination = ({
  routeBase = '/',
  setPage,
  page,
  // results,
  show,
  getUrl,
  totalPages,
  // totalResults,
}) => {

  const paginationItem = (pageNo, children = null, canBeCurrent = true) => <PaginationItem
    pageNo={pageNo}
    children={children}
    currentPage={page}
    url={getUrl(routeBase, pageNo)}
    canBeCurrent={canBeCurrent}
    onClick={setPage(pageNo)}
  />

  const getPage = (page) => {
    if(page<1) return 1;
    if(page>totalPages) return totalPages;
    return page;
  }
  const isAllowedPage = (page) => !(page < 1 || page > totalPages);

  if(!show || totalPages===0) return null;
  return (
    <PaginationBootstrap className="d-flex justify-content-center mt-3">
      {totalPages === 1 ? (
        null
      ) : (
        <>
          {paginationItem(getPage(page-1), <><ChevronLeft /></>, false)}
          {isAllowedPage(page-4) && paginationItem(1)}
          {isAllowedPage(page-3) && paginationItem(page-3, '...', false)}
          {isAllowedPage(page-2) && paginationItem(page-2)}
          {isAllowedPage(page-1) && paginationItem(page-1)}
          {isAllowedPage(page) && paginationItem(page)}
          {isAllowedPage(page+1) && paginationItem(page+1)}
          {isAllowedPage(page+2) && paginationItem(page+2)}
          {isAllowedPage(page+3) && paginationItem(page+3, '...', false)}
          {isAllowedPage(page+4) && paginationItem(totalPages)}
          {paginationItem(getPage(page+1), <><ChevronRight /></>, false)}
        </>
      )}
    </PaginationBootstrap>
  );
};
