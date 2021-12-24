import {useMemo} from "react";

export const PAGINATION_ITEM_TYPE_NUMBER  = 'number';
export const PAGINATION_ITEM_TYPE_FIRST   = 'first';
export const PAGINATION_ITEM_TYPE_PREV    = 'prev';
export const PAGINATION_ITEM_TYPE_NEXT    = 'next';
export const PAGINATION_ITEM_TYPE_LAST    = 'last';
export const PAGINATION_ITEM_TYPE_DOTS    = 'dots';
export const PAGINATION_ITEM_TYPE_CURRENT = 'current';

export const PAGINATION_SET_PAGE_TYPE_URL   = 'url';
export const PAGINATION_SET_PAGE_TYPE_STATE = 'state';

export const useCreatePagination = (params, {mode, setPager, getUrl}, range = 3) => {

  const pages        = 9;//isNaN(parseInt(params?.pages))        ? 1  : parseInt(params?.pages);
  const pageNumber   = 10;//isNaN(parseInt(params?.pageNumber))   ? 1  : Math.min(pages, parseInt(params?.pageNumber));
  const pageSize     = 15;//isNaN(parseInt(params?.pageSize))     ? 10 : parseInt(params?.pageSize);
  const resultsCount = 1000;//isNaN(parseInt(params?.resultsCount)) ? 0  : parseInt(params?.resultsCount);
  const lastPage = Math.max(pages, 1); // set lastPage to MINIMUM 1

  const pagination = useMemo(() => {

    let items = [];

    const createItem = (type, val) => {
      items.push({
        key: `${type}_${val}`,
        type,
        value: val,
        url: getUrl(val, pageSize),
        setPage: () => setPager(val, pageSize),
      });
    }

    // first page
    createItem(PAGINATION_ITEM_TYPE_FIRST, 1);

    //prev page
    if(pageNumber>1) {
      createItem(PAGINATION_ITEM_TYPE_PREV, pageNumber-1);
    }

    // [pageNumber-range]
    if(pageNumber>range) {
      createItem(PAGINATION_ITEM_TYPE_DOTS, pageNumber-range);
    }

    // [currentPage-range......currentPage-1]
    for(let i=pageNumber-range+1; i<pageNumber; i++) {
      if(i>=1) {
        createItem(PAGINATION_ITEM_TYPE_NUMBER, i);
      }
    }

    // current page
    createItem(PAGINATION_ITEM_TYPE_CURRENT, pageNumber);

    // [currentPage+1......currentPage+range]
    for(let i=pageNumber+1; i<=pageNumber+range-1; i++) {
      if(i<pages) {
        createItem(PAGINATION_ITEM_TYPE_NUMBER, i);
      }
    }


    // pageNumber+range
    if(lastPage-pageNumber>=range) {
      createItem(PAGINATION_ITEM_TYPE_DOTS, pageNumber+range);
    }

    // next page
    if(lastPage-pageNumber>=1) {
      createItem(PAGINATION_ITEM_TYPE_NEXT, pageNumber+1);
    }

    // last page
    createItem(PAGINATION_ITEM_TYPE_LAST, lastPage);

    return items;
  }, [pageNumber, lastPage, pageSize, resultsCount]);

  return {
    pagination,
    pageNumber,
    lastPage,
    pageSize,
    resultsCount,
    mode,
    // from,
    // to,
  }

}
