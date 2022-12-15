import Pagination from '@monorepo/shared/components/utilities/Pagination/Pagination';
import { Box } from '@chakra-ui/react';

const AppWrapper = () => {

  const handlePageChange = () => {
    console.log('handle');
  }

  return <>
    <Box bgColor='red.400'>test</Box>
    <Pagination activePage={1} pageSize={10} totalItems={30} onPageChange={handlePageChange}/>
  </>;
};

export default AppWrapper;
