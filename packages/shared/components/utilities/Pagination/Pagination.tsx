import React, { FC } from 'react';
import {
  usePagination,
} from '@ajna/pagination';


interface IProps {
  activePage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (nextPage: number) => void;
}

const Pagination: FC<IProps> = ({ totalItems, pageSize, activePage, onPageChange }: IProps) => {
  const { pages, pagesCount, currentPage, setCurrentPage, isDisabled } = usePagination({
    total: totalItems,
    limits: {
      outer: 1,
      inner: 1,
    },
    initialState: {
      pageSize: pageSize,
      currentPage: activePage,
    },
  });

  return (
    <div>pagination</div>
  );
};

export default Pagination;
