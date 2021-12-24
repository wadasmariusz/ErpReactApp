import React from 'react';
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {
  PAGINATION_ITEM_TYPE_CURRENT,
  PAGINATION_ITEM_TYPE_DOTS,
  PAGINATION_ITEM_TYPE_FIRST, PAGINATION_ITEM_TYPE_LAST, PAGINATION_ITEM_TYPE_NEXT, PAGINATION_ITEM_TYPE_NUMBER,
  PAGINATION_ITEM_TYPE_PREV
} from "app/hooks/crud/useCreatePagination";

export const paginationLabel = (item) => {
  switch(item.type) {
    case PAGINATION_ITEM_TYPE_FIRST:
      return null;
    case PAGINATION_ITEM_TYPE_PREV:
      return null;
    case PAGINATION_ITEM_TYPE_DOTS:
      return null;
    case PAGINATION_ITEM_TYPE_NUMBER:
    case PAGINATION_ITEM_TYPE_CURRENT:
      return item.value;
    case PAGINATION_ITEM_TYPE_NEXT:
      return null;
    case PAGINATION_ITEM_TYPE_LAST:
      return null;
    default:
      return null;
  }
}

export const QueryPaginationDefault = () => {

  const {pagination} = useQueryContext();

  // console.log(pagination.pagination)

  return (
    <div>

    </div>
  );
};
