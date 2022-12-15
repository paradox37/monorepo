import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import {
  Pagination as AjnaPagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
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
      <Flex justifyContent='flex-end' alignItems='flex-end' mt={8}>
        <Box>
          <AjnaPagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              isDisabled={isDisabled}
              onPageChange={onPageChange}
          >
            <PaginationContainer align='center' justify='space-between' w='full'>
              <PaginationPrevious
                  color='red.50'
                  fontSize='sm'
                  p='0'
                  w='8'
                  h='8'
                  minW='8'
                  mr='2'
                  _hover={{
                    bg: 'primary.500',
                    color: 'white',
                    opacity: 1,
                  }}
                  bg='none'
              >
              </PaginationPrevious>
              <PaginationPageGroup
                  isInline
                  align='center'
                  separator={
                    <PaginationSeparator
                        color='red.50'
                        fontSize='sm'
                        w='8'
                        h='8'
                        mr='1'
                        jumpSize={11}
                    />
                  }
              >
                {pages.map((page: number) => (
                    <PaginationPage
                        bg='none'
                        color='red.50'
                        fontSize='sm'
                        w='8'
                        h='8'
                        key={`pagination_page_${page}`}
                        page={page}
                        _hover={{
                          bg: 'primary.500',
                          color: 'white',
                          opacity: 1,
                        }}
                        _current={{
                          bg: 'primary.500',
                          color: 'white !important',
                          opacity: 1,
                        }}
                    />
                ))}
              </PaginationPageGroup>
              <PaginationNext
                  color='gray.700'
                  fontSize='sm'
                  p='0'
                  w='8'
                  h='8'
                  minW='8'
                  ml='1'
                  _hover={{
                    bg: 'primary.500',
                    color: 'white',
                  }}
                  bg='none'
              >
              </PaginationNext>
            </PaginationContainer>
          </AjnaPagination>
        </Box>
      </Flex>
  );
};

export default Pagination;
